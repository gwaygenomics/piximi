import {all} from "redux-saga/effects";

import {compile} from "./model";

export function* root() {
  const effects = [compile()];

  yield all(effects);
}
