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

    const args = {
      loss: lossFunction,
      metrics: metrics,
      optimizer: optimizationFunction
    };

    state.graph.compile(args);
  },
  [evaluate.toString()]: (state, action) => {
    const {categories, images} = action.payload;
  },
  [fit.toString()]: (state, action) => {
    const {categories, images} = action.payload;

    const x = tensorflow.data.array(
      [...Array(100)].map(() => {
        return tensorflow.randomUniform([224, 224, 3]);
      })
    );
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
