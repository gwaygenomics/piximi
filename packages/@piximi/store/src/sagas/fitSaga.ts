import {put} from "redux-saga/effects";
import {compileAction, mobilenetv1Action} from "../actions/model";

export function* fitSaga() {
  yield put(mobilenetv1Action);
}
