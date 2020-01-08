import {Model} from "@piximi/types";
import {createReducer} from "@reduxjs/toolkit";
import * as tensorflow from "@tensorflow/tfjs";
import {
  compileAction,
  evaluate,
  fit,
  load,
  predict,
  save,
  updateCompileOptions,
  updateFitOptions
} from "../actions/model";

function* generator() {
  const elements = 10;
  let index = 0;

  while (index < elements) {
    index++;

    const x = tensorflow.randomUniform([224, 224, 3]);

    const y = tensorflow.randomUniform([1], 0, 2);

    yield [x, y];
  }
}

const initialState: Model = {};

export const modelReducer = createReducer(initialState, {
  [compileAction.toString()]: (state) => {
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

    const dataset = tensorflow.data.generator(generator);
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
