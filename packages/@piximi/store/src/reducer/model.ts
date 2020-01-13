import {CompileOptions, FitOptions} from "@piximi/types";
import {createReducer} from "@reduxjs/toolkit";
import * as actions from "../actions/model";
import {History, LayersModel, Scalar, Tensor} from "@tensorflow/tfjs";
import {Dataset} from "@tensorflow/tfjs-data";

export type Model = {
  compileOptions?: CompileOptions;
  compiling: boolean;
  data?: Dataset<{xs: Tensor; ys: Tensor}>;
  evaluating: boolean;
  evaluations?: Scalar | Array<Scalar>;
  fitOptions?: FitOptions;
  fitting: boolean;
  generating: boolean;
  graph?: LayersModel;
  history?: History;
  opening: boolean;
  predicting: boolean;
  predictions?: Tensor;
  saving: boolean;
  validationData?: Dataset<{xs: Tensor; ys: Tensor}>;
};

const state: Model = {
  compiling: false,
  evaluating: false,
  fitting: false,
  generating: false,
  opening: false,
  predicting: false,
  saving: false
};

export const reducer = createReducer(state, {
  [actions.compile.toString()]: (state) => {
    return {
      ...state,
      compiling: true
    };
  },
  [actions.compiled.toString()]: (state, action) => {
    const {compiled} = action.payload;

    return {
      ...state,
      compiling: false,
      graph: compiled
    };
  },
  [actions.evaluate.toString()]: (state) => {
    return {
      ...state,
      evaluating: true
    };
  },
  [actions.evaluated.toString()]: (state, action) => {
    const {evaluations} = action.payload;

    return {
      ...state,
      evaluating: false,
      evaluations: evaluations
    };
  },
  [actions.fit.toString()]: (state) => {
    return {
      ...state,
      fitting: true
    };
  },
  [actions.fitted.toString()]: (state, action) => {
    const {fitted, history} = action.payload;

    return {
      ...state,
      fitting: false,
      graph: fitted,
      history: history
    };
  },
  [actions.generate.toString()]: (state) => {
    return {
      ...state,
      generating: true
    };
  },
  [actions.generated.toString()]: (state, action) => {
    const {data, validationData} = action.payload;

    return {
      ...state,
      data: data,
      generating: false,
      validationData: validationData
    };
  },
  [actions.open.toString()]: (state) => {
    return {
      ...state,
      opening: true
    };
  },
  [actions.opened.toString()]: (state, action) => {
    const {opened} = action.payload;

    return {
      ...state,
      graph: opened,
      opening: false
    };
  },
  [actions.predict.toString()]: (state) => {
    return {
      ...state,
      predicting: true
    };
  },
  [actions.predicted.toString()]: (state, action) => {
    const {predictions} = action.payload;

    return {
      ...state,
      predicting: false,
      predictions: predictions
    };
  },
  [actions.save.toString()]: (state) => {
    return {
      ...state,
      saving: true
    };
  },
  [actions.saved.toString()]: (state, action) => {}
});
