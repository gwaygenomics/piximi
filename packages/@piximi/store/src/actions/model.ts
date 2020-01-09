import {Category, CompileOptions, FitOptions, Image} from "@piximi/types";
import {createAction} from "@reduxjs/toolkit";
import * as tensorflow from "@tensorflow/tfjs";

export const compileAction = createAction<{
  model: tensorflow.LayersModel;
  options: CompileOptions;
}>("compile");

export const datasetAction = createAction<{}>("dataset");

export const evaluateAction = createAction<{
  categories: Array<Category>;
  images: Array<Image>;
  model: tensorflow.LayersModel;
  options: FitOptions;
}>("MODEL/EVALUATE");

export const fitAction = createAction<{
  categories: Array<Category>;
  images: Array<Image>;
  model: tensorflow.LayersModel;
  options: FitOptions;
}>("fit");

export const generateAction = createAction<{
  categories: Array<Category>;
  images: Array<Image>;
}>("generate");

export const openedAction = createAction<{opened: tensorflow.LayersModel}>(
  "opened"
);

export const openAction = createAction<{
  path: string;
  classes: number;
  units: number;
}>("open");

export const predictAction = createAction<{
  images: Array<Image>;
  model: tensorflow.LayersModel;
}>("MODEL/PREDICT");

export const saveAction = createAction<{}>("MODEL/SAVE");
export const updateCompileOptions = createAction<CompileOptions>(
  "MODEL/UPDATE-COMPILE-OPTIONS"
);
export const updateFitOptions = createAction<FitOptions>(
  "MODEL/UPDATE-FIT-OPTIONS"
);

export const mobilenetv1Action = createAction<{}>("mobilenetv1");
