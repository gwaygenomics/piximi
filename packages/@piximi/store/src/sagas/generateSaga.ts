import {generate} from "@piximi/models";
import {put, takeEvery} from "redux-saga/effects";

import {generatedAction} from "../actions";

export function* generateSaga(action: any) {
  const {images, categories} = action.payload;

  const data = yield generate(images, categories);

  yield put(generatedAction({data: data}));
}

export function* watchGenerateActionSaga() {
  yield takeEvery("CLASSIFIER_GENERATE", generateSaga);
}
