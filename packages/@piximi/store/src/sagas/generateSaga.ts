import {generate} from "@piximi/models";
import {put, takeEvery} from "redux-saga/effects";

import {generatedAction} from "../actions";

export function* generateSaga(action: any) {
  const {images, categories} = action.payload;

  const {data, validationData} = yield generate(images, categories);

  yield put(generatedAction({data: data, validationData: validationData}));
}

export function* watchGenerateActionSaga() {
  yield takeEvery("CLASSIFIER_GENERATE", generateSaga);
}
