import * as tensorflow from "@tensorflow/tfjs";
import {CompileOptions} from "@piximi/types";

export const compile = (
  promise: Promise<tensorflow.LayersModel>,
  options: CompileOptions
) => {
  return Promise.resolve(promise)
    .then((graph) => {
      graph.compile({
        optimizer: options.optimizationFunction,
        metrics: options.metrics,
        loss: options.lossFunction
      });

      return graph;
    })
    .catch((reason) => {});
};
