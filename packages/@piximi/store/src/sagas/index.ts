import {all, fork} from "redux-saga/effects";

import {compileSaga, watchCompileActionSaga} from "./compileSaga";
import {evaluateSaga, watchEvaluateActionSaga} from "./evaluateSaga";
import {fitSaga, watchFitActionSaga} from "./fitSaga";
import {generateSaga, watchGenerateActionSaga} from "./generateSaga";
import {openSaga, watchOpenActionSaga} from "./openSaga";
import {predictSaga, watchPredictActionSaga} from "./predictSaga";
import {saveSaga, watchSaveActionSaga} from "./saveSaga";

export function* root() {
  const effects = [fork(watchOpenActionSaga)];

  yield all(effects);
}
