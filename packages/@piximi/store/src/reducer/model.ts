import {Model} from "@piximi/types";
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

const initialState: Model = {};

export const modelReducer = createReducer(initialState, {
  [compile.toString()]: (state, action) => {},
  [evaluate.toString()]: (state, action) => {},
  [fit.toString()]: (state, action) => {},
  [load.toString()]: (state, action) => {},
  [predict.toString()]: (state, action) => {},
  [save.toString()]: (state, action) => {},
  [updateCompileOptions.toString()]: (state, action) => {
    state.compileOptions = action.payload;
  },
  [updateFitOptions.toString()]: (state, action) => {}
});
