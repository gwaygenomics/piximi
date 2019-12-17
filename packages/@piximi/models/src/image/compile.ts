import * as tensorflow from "@tensorflow/tfjs";
import {CompileOptions} from "@piximi/types";

export const compile = (
  model: tensorflow.LayersModel,
  options: CompileOptions
) => {
  model.compile({
    loss: options.loss,
    metrics: options.metrics,
    optimizer: options.optimizer
  });

  return model;
};
