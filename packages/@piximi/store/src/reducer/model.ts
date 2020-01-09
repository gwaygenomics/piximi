import {Model} from "@piximi/types";
import {createReducer} from "@reduxjs/toolkit";
import * as tensorflow from "@tensorflow/tfjs";
import {
  compileAction,
  evaluateAction,
  fitAction,
  openAction,
  predictAction,
  saveAction,
  updateCompileOptions,
  updateFitOptions,
  openedAction
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

const initialState: Model = {
  opening: false
};

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
  [evaluateAction.toString()]: (state, action) => {
    const {categories, images} = action.payload;
  },
  [fitAction.toString()]: (state, action) => {
    const {categories, images} = action.payload;

    const dataset = tensorflow.data.generator(generator);
  },
  [predictAction.toString()]: (state, action) => {
    const {images} = action.payload;
  },
  [saveAction.toString()]: (state, action) => {},
  [updateCompileOptions.toString()]: (state, action) => {
    state.compileOptions = action.payload;
  },
  [updateFitOptions.toString()]: (state, action) => {
    state.fitOptions = action.payload;
  },
  [openedAction.toString()]: (state, action) => {
    const {opened} = action.payload;

    return {...state, opened: opened, opening: false};
  },
  [openAction.toString()]: (state) => {
    return {...state, opening: true};
  }
});
