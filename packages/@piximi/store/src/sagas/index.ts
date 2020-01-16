import {all} from "redux-saga/effects";

import {compileSaga, watchCompileActionSaga} from "./compileSaga";
import {evaluateSaga, watchEvaluateActionSaga} from "./evaluateSaga";
import {fitSaga, watchFitActionSaga} from "./fitSaga";
import {generateSaga, watchGenerateActionSaga} from "./generateSaga";
import {openSaga, watchOpenActionSaga} from "./openSaga";
import {predictSaga, watchPredictActionSaga} from "./predictSaga";
import {saveSaga, watchSaveActionSaga} from "./saveSaga";

export function* root() {
  const effects = [
    compileSaga,
    evaluateSaga,
    fitSaga,
    generateSaga,
    openSaga,
    predictSaga,
    saveSaga,
    watchCompileActionSaga,
    watchEvaluateActionSaga,
    watchFitActionSaga,
    watchGenerateActionSaga,
    watchOpenActionSaga,
    watchPredictActionSaga,
    watchSaveActionSaga
  ];

  yield all(effects);
}
