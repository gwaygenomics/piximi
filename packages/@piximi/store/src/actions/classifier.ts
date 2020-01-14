import {
  Category,
  CompileOptions,
  FitOptions,
  Image,
  Loss,
  Metric,
  Optimizer
} from "@piximi/types";
import {createAction} from "@reduxjs/toolkit";
import {History, LayersModel, Scalar, Tensor} from "@tensorflow/tfjs";
import {Dataset} from "@tensorflow/tfjs-data";

export const compile = createAction<{
  opened: LayersModel;
  options: CompileOptions;
}>("compile");

export const compiled = createAction<{
  compiled: LayersModel;
}>("compiled");

export const evaluate = createAction<{
  fitted: LayersModel;
  data: Dataset<{xs: Tensor; ys: Tensor}>;
}>("evaluate");

export const evaluated = createAction<{
  evaluations: Scalar | Array<Scalar>;
}>("evaluated");

export const fit = createAction<{
  compiled: LayersModel;
  data: Dataset<{xs: Tensor; ys: Tensor}>;
  validationData: Dataset<{xs: Tensor; ys: Tensor}>;
  options: FitOptions;
}>("fit");

export const fitted = createAction<{
  fitted: LayersModel;
  status: History;
}>("fitted");

export const generate = createAction<{
  images: Array<Image>;
  categories: Array<Category>;
}>("generate");

export const generated = createAction<{
  data: Dataset<{xs: Tensor; ys: Tensor}>;
}>("generated");

export const open = createAction<{
  pathname: string;
  classes: number;
  units: number;
}>("open");

export const opened = createAction<{
  opened: LayersModel;
}>("opened");

export const predict = createAction<{
  compiled: LayersModel;
  data: Dataset<{xs: Tensor; ys: Tensor}>;
}>("predict");

export const predicted = createAction<{
  predictions: Tensor;
}>("predicted");

export const updateLearningRate = createAction<{
  learningRate: number;
}>("update-learning-rate");

export const updateLossFunction = createAction<{
  lossFunction: Loss;
}>("update-loss-function");

export const updateMetrics = createAction<{
  metrics: Array<Metric>;
}>("update-metrics");

export const updateOptimizationFunction = createAction<{
  optimizationFunction: Optimizer;
}>("update-optimization-function");

export const save = createAction<{}>("save");

export const saved = createAction<{}>("saved");
