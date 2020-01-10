import {Category, CompileOptions, FitOptions, Image} from "@piximi/types";
import {createAction} from "@reduxjs/toolkit";
import {History, LayersModel, Scalar, Tensor} from "@tensorflow/tfjs";
import {Dataset} from "@tensorflow/tfjs-data";

type CompileAction = {
  opened: LayersModel;
  options: CompileOptions;
};

export const compile = createAction<CompileAction>("compile");

type CompiledAction = {
  compiled: LayersModel;
};

export const compiled = createAction<CompiledAction>("compiled");

type EvaluateAction = {
  fitted: LayersModel;
  data: Dataset<{x: Tensor; y: Tensor}>;
};

export const evaluate = createAction<EvaluateAction>("evaluate");

type EvaluatedAction = {
  evaluations: Scalar | Array<Scalar>;
};

export const evaluated = createAction<EvaluatedAction>("evaluated");

type FitAction = {
  compiled: LayersModel;
  data: Dataset<{x: Tensor; y: Tensor}>;
  validationData: Dataset<{x: Tensor; y: Tensor}>;
  options: FitOptions;
};

export const fit = createAction<FitAction>("fit");

type FittedAction = {
  fitted: LayersModel;
  history: History;
};

export const fitted = createAction<FittedAction>("fitted");

type GenerateAction = {
  categories: Array<Category>;
  images: Array<Image>;
};

export const generate = createAction<GenerateAction>("generate");

type GeneratedAction = {
  data: Dataset<{x: Tensor; y: Tensor}>;
  validationData: Dataset<{x: Tensor; y: Tensor}>;
};

export const generated = createAction<GeneratedAction>("generated");

type OpenAction = {
  pathname: string;
  classes: number;
  units: number;
};

export const open = createAction<OpenAction>("open");

type OpenedAction = {
  opened: LayersModel;
};

export const opened = createAction<OpenedAction>("opened");

type PredictAction = {
  compiled: LayersModel;
  data: Dataset<{x: Tensor; y: Tensor}>;
};

export const predict = createAction<PredictAction>("predict");

type PredictedAction = {
  predictions: Tensor;
};

export const predicted = createAction<PredictedAction>("predicted");

type SaveAction = {};

export const save = createAction<SaveAction>("save");

type SavedAction = {};

export const saved = createAction<SavedAction>("saved");
