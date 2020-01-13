import {all} from "redux-saga/effects";

import {compile} from "./compile";
import {evaluate} from "./evaluate";
import {fit} from "./fit";
import {generate} from "./generate";
import {open} from "./open";
import {predict} from "./predict";
import {save} from "./save";

export function* root() {
  const effects = [compile, evaluate, fit, generate, open, predict, save];

  yield all(effects);
}
