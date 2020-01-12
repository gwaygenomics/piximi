import {put, takeLatest} from "redux-saga/effects";
import * as classifier from "@piximi/models";
import * as actions from "../../actions";

export function* generate(action: any) {
  // const {images, categories} = action.payload;
  console.log(action.payload);
  // const generated = yield classifier.generate(categories, images);

  // yield put(actions.generate(generated));
}

export function* watchGenerate() {
  yield takeLatest("generate", generate);
}
