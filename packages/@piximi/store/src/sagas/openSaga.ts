import {open} from "@piximi/models";
import {put, takeEvery} from "redux-saga/effects";

import {openedAction} from "../actions";

export function* openSaga(action: any) {
  const {path, classes, units} = action.payload;

  const opened = yield open(classes, path, units);

  console.log(opened);

  yield put(openedAction({opened: opened}));
}

export function* watchOpenActionSaga() {
  yield takeEvery("CLASSIFIER_OPEN", openSaga);
}
