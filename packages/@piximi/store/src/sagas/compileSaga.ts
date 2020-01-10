import {put, takeLatest} from "redux-saga/effects";
import {compile} from "@piximi/models";

export function* compileSaga(action: any) {
  const {opened, options} = action.payload;

  const compiled = yield compile(opened, options);

  yield put({payload: compiled, type: "compiled"});
}

export function* watchCompileSaga() {
  yield takeLatest("compile", compileSaga);
}
