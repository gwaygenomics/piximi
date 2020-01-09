import {put, takeLatest} from "redux-saga/effects";
import {openAction} from "../actions/model";
import {mobilenetv1} from "@piximi/models";

export function* openSaga(action: any) {
  const {path, classes, units} = action.payload;

  const compiled = yield mobilenetv1(classes, path, units);

  yield put(openAction());
}

export function* watchOpenSaga() {
  yield takeLatest("open-MobileNetV1", openSaga);
}
