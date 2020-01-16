import {fit} from "@piximi/models";
import {put, takeLatest} from "redux-saga/effects";

import {fittedAction} from "../actions";

export function* fitSaga(action: any) {
  const {compiled, data, validationData, options} = action.payload;

  const {fitted, status} = yield fit(compiled, data, validationData, options);

  yield put(fittedAction({fitted: fitted, status: status}));
}

export function* watchFitSaga() {
  yield takeLatest("CLASSIFIER_FIT", fitSaga);
}
