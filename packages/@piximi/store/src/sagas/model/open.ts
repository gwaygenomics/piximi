import {put, takeLatest} from "redux-saga/effects";
import * as classifier from "@piximi/models";

export function* open(action: any) {
  const {path, classes, units} = action.payload;

  const opened = yield classifier.open(classes, path, units);

  yield put({payload: opened, type: "opened"});
}

export function* watchOpen() {
  yield takeLatest("open", open);
}
