import {Category, CompileOptions, Image} from "@piximi/types";
import {createAction} from "@reduxjs/toolkit";
import {LayersModel, Tensor} from "@tensorflow/tfjs";
import {Dataset} from "@tensorflow/tfjs-data";

type CompileAction = {opened: LayersModel; options: CompileOptions};

export const compile = createAction<CompileAction>("compile");

type CompiledAction = {compiled: LayersModel};

export const compiled = createAction<CompiledAction>("compiled");

type EvaluateAction = {};

export const evaluate = createAction<EvaluateAction>("evaluate");

type EvaluatedAction = {};

export const evaluated = createAction<EvaluatedAction>("evaluated");

type FitAction = {};

export const fit = createAction<FitAction>("fit");

type FittedAction = {};

export const fitted = createAction<FittedAction>("fitted");

type GenerateAction = {categories: Array<Category>; images: Array<Image>};

export const generate = createAction<GenerateAction>("generate");

type GeneratedAction = {generated: Dataset<{x: Tensor; y: Tensor}>};

export const generated = createAction<GeneratedAction>("generated");

type OpenAction = {pathname: string; classes: number; units: number};

export const open = createAction<OpenAction>("open");

type OpenedAction = {opened: LayersModel};

export const opened = createAction<OpenedAction>("opened");

type PredictAction = {};

export const predict = createAction<PredictAction>("predict");

type PredictedAction = {};

export const predicted = createAction<PredictedAction>("predicted");

type SaveAction = {};

export const save = createAction<SaveAction>("save");

type SavedAction = {};

export const saved = createAction<SavedAction>("saved");
