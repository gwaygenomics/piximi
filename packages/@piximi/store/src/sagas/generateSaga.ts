import {put, takeLatest} from "redux-saga/effects";
import {generate} from "@piximi/models";

export function* generateSaga(action: any) {
  const {categories, images} = action.payload;

  const generated = yield generate(categories, images);

  yield put({payload: generated, type: "generate"});
}

export function* watchGenerateSaga() {
  yield takeLatest("generate", generateSaga);
}
