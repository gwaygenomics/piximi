import {put, takeLatest} from "redux-saga/effects";
import {compileAction} from "../actions/model";
import {Loss, Metric, Optimizer} from "@piximi/types";
import {compile, mobilenetv1} from "@piximi/models";

const path =
  "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

const options = {
  learningRate: 0.01,
  lossFunction: Loss.CategoricalCrossentropy,
  metrics: [Metric.CategoricalAccuracy],
  optimizationFunction: Optimizer.SGD
};

export function* compileSaga() {
  const compiled = yield compile(mobilenetv1(10, path, 100), options);

  const action = compileAction();

  yield put(action);
}

export function* watchCompileSaga() {
  yield takeLatest("compile", compileSaga);
}
