import {put, takeLatest} from "redux-saga/effects";
import * as classifier from "@piximi/models";
import * as actions from "../../actions";

export function* fit(action: any) {
  const {compiled, data, validationData, options} = action.payload;

  const {fitted, status} = yield classifier.fit(
    compiled,
    data,
    validationData,
    options
  );

  yield put(actions.fitted({fitted: fitted, status: status}));
}

export function* watchFit() {
  yield takeLatest("fit", fit);
}
