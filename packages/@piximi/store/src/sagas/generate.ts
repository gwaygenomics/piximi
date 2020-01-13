import * as classifier from "@piximi/models";
import {put, takeLatest} from "redux-saga/effects";

import * as actions from "../actions";

export function* generate(action: any) {
  const {images, categories} = action.payload;

  const data = yield classifier.generate(images, categories);

  yield put(actions.generated({data: data}));
}

export function* watchGenerate() {
  yield takeLatest("generate", generate);
}
