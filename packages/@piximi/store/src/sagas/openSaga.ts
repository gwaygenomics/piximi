import {put, takeLatest} from "redux-saga/effects";
import {mobilenetv1} from "@piximi/models";

export function* openSaga(action: any) {
  const {path, classes, units} = action.payload;

  const opened = yield mobilenetv1(classes, path, units);

  yield put({payload: opened, type: "opened"});
}

export function* watchOpenSaga() {
  yield takeLatest("open", openSaga);
}
