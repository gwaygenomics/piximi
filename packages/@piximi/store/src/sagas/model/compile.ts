import {put, takeLatest} from "redux-saga/effects";
import * as classifier from "@piximi/models";
import * as actions from "../../actions";

export function* compile(action: any) {
  const {opened, options} = action.payload;

  const compiled = yield classifier.compile(opened, options);

  yield put(actions.compiled({compiled: compiled}));
}

export function* watchCompile() {
  yield takeLatest("compile", compile);
}
