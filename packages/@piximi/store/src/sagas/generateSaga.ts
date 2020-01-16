import {generate} from "@piximi/models";
import {put, takeLatest} from "redux-saga/effects";

import {generatedAction} from "../actions";

export function* generateSaga(action: any) {
  const {images, categories} = action.payload;

  const data = yield generate(images, categories);

  yield put(generatedAction({data: data}));
}

export function* watchGenerateActionSaga() {
  yield takeLatest("CLASSIFIER_GENERATE", generateSaga);
}
