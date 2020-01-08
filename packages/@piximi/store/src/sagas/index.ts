import {all} from "redux-saga/effects";
import {compileSaga} from "./compileSaga";
import {datasetSaga} from "./datasetSaga";
import {evaluateSaga} from "./evaluateSaga";
import {fitSaga} from "./fitSaga";
import {generateSaga} from "./generateSaga";
import {predictSaga} from "./predictSaga";

export function* root() {
  yield all([
    compileSaga(),
    datasetSaga(),
    evaluateSaga(),
    fitSaga(),
    generateSaga(),
    predictSaga()
  ]);
}
