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
import {modelReducer} from "./model";

import {Category, Classifier, Image, Partition, Score} from "@piximi/types";

it("compile", () => {
  const action = compileAction();

  const reducer = modelReducer({}, action);

  expect(reducer).toEqual({});
});
