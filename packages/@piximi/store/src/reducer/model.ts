import {createReducer} from "@reduxjs/toolkit";

import {
  compile,
  evaluate,
  fit,
  load,
  predict,
  save,
  updateCompileOptions,
  updateFitOptions
} from "../actions/model";

const initialState = {};

export const modelReducer = createReducer(initialState, {
  [compile.toString()]: (state, action) => {},
  [evaluate.toString()]: (state, action) => {},
  [fit.toString()]: (state, action) => {},
  [load.toString()]: (state, action) => {},
  [predict.toString()]: (state, action) => {},
  [save.toString()]: (state, action) => {},
  [updateCompileOptions.toString()]: (state, action) => {},
  [updateFitOptions.toString()]: (state, action) => {}
});
