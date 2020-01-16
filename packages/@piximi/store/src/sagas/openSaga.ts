import {open} from "@piximi/models";
import {put, takeLatest} from "redux-saga/effects";

import {openedAction} from "../actions";

export function* openSaga(action: any) {
  const {path, classes, units} = action.payload;

  const opened = yield open(classes, path, units);

  yield put(openedAction({opened: opened}));
}

export function* watchOpenActionSaga() {
  yield takeLatest("CLASSIFIER_OPEN", openSaga);
}
