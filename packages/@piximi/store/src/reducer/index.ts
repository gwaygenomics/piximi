import {combineReducers} from "redux";
import {classifierReducer} from "./classifier";
import * as model from "./model";

const reducers = {
  classifier: classifierReducer,
  model: model.reducer
};

export const reducer = combineReducers(reducers);
