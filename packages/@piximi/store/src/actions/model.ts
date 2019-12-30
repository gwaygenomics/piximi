import {createAction} from "@reduxjs/toolkit";
import {CompileOptions, FitOptions} from "@piximi/types";

export const compile = createAction<any>("MODEL/COMPILE");

export const evaluate = createAction<any>("MODEL/EVALUATE");

export const fit = createAction<any>("MODEL/FIT");

export const load = createAction<any>("MODEL/LOAD");

export const predict = createAction<any>("MODEL/PREDICT");

export const save = createAction<any>("MODEL/SAVE");

export const updateCompileOptions = createAction<CompileOptions>(
  "MODEL/UPDATE-COMPILE-OPTIONS"
);

export const updateFitOptions = createAction<FitOptions>(
  "MODEL/UPDATE-FIT-OPTIONS"
);
