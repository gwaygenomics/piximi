import {CompileOptions} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";

export const compile = async (
  promise: Promise<tensorflow.LayersModel>,
  options: CompileOptions
) => {
  const graph = await promise;

  graph.compile({
    optimizer: options.optimizationFunction,
    metrics: options.metrics,
    loss: options.lossFunction
  });

  return graph;
};
