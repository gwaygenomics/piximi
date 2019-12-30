import {Model} from "@piximi/types";
import {createReducer} from "@reduxjs/toolkit";
import * as tensorflow from "@tensorflow/tfjs";
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
  [compile.toString()]: (state) => {
    const {lossFunction, optimizationFunction, metrics} = state.compileOptions;

    state.graph.compile({
      loss: lossFunction,
      metrics: metrics,
      optimizer: optimizationFunction
    });
  },
  [evaluate.toString()]: (state, action) => {
    const {categories, images} = action.payload;
  },
  [fit.toString()]: (state, action) => {
    const {categories, images} = action.payload;
  },
  [load.toString()]: (state, action) => {},
  [predict.toString()]: (state, action) => {
    const {images} = action.payload;
  },
  [save.toString()]: (state, action) => {},
  [updateCompileOptions.toString()]: (state, action) => {
    state.compileOptions = action.payload;
  },
  [updateFitOptions.toString()]: (state, action) => {
    state.fitOptions = action.payload;
  }
});
