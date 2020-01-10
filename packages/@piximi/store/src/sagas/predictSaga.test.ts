import {put, takeLatest} from "redux-saga/effects";
import {generate} from "@piximi/models";

export function* predictSaga(action: any) {
  const {compiled, images} = action.payload;

  const predictions = yield generate(compiled, images);

  yield put({payload: predictions, type: "generate"});
}

export function* watchPredictSaga() {
  yield takeLatest("generate", generateSaga);
}
