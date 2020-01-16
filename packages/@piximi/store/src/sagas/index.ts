import {all} from "redux-saga/effects";

import {compileSaga, watchCompileSaga} from "./compileSaga";
import {evaluateSaga, watchEvaluateSaga} from "./evaluateSaga";
import {fitSaga, watchFitSaga} from "./fitSaga";
import {generateSaga, watchGenerateSaga} from "./generateSaga";
import {openSaga, watchOpenSaga} from "./openSaga";
import {predictSaga, watchPredictSaga} from "./predictSaga";
import {saveSaga, watchSaveSaga} from "./saveSaga";

export function* root() {
  const effects = [
    compileSaga,
    evaluateSaga,
    fitSaga,
    generateSaga,
    openSaga,
    predictSaga,
    saveSaga,
    watchCompileSaga,
    watchEvaluateSaga,
    watchFitSaga,
    watchGenerateSaga,
    watchOpenSaga,
    watchPredictSaga,
    watchSaveSaga
  ];

  yield all(effects);
}
