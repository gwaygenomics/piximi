import {Category, CompileOptions, FitOptions, Image} from "@piximi/types";
import {createAction} from "@reduxjs/toolkit";

export const compileAction = createAction<{}>("MODEL/COMPILE");

export const evaluate = createAction<{
  categories: Array<Category>;
  images: Array<Image>;
}>("MODEL/EVALUATE");

export const fit = createAction<{
  categories: Array<Category>;
  images: Array<Image>;
}>("MODEL/FIT");

export const load = createAction<{}>("MODEL/LOAD");

export const predict = createAction<{images: Array<Image>}>("MODEL/PREDICT");

export const save = createAction<{}>("MODEL/SAVE");

export const updateCompileOptions = createAction<CompileOptions>(
  "MODEL/UPDATE-COMPILE-OPTIONS"
);

export const updateFitOptions = createAction<FitOptions>(
  "MODEL/UPDATE-FIT-OPTIONS"
);
