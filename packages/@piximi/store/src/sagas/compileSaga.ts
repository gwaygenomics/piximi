import {put} from "redux-saga/effects";
import {compileAction} from "../actions/model";

export function* compileSaga() {
  yield put(compileAction);
}
