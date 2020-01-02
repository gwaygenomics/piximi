import * as tensorflow from "@tensorflow/tfjs";
import {CompileOptions} from "@piximi/types";

export const compile = (
  model: tensorflow.LayersModel,
  activation: string,
  classes: number,
  units: number = 100,
  options: CompileOptions
) => {
  const truncated = tensorflow.model({
    inputs: model.inputs,
    outputs: model.output
  });

  const a = tensorflow.layers.flatten({
    inputShape: truncated.outputs[0].shape.slice(1)
  });

  const b = tensorflow.layers.dense({
    units: units,
    activation: "relu",
    kernelInitializer: "varianceScaling",
    useBias: true
  });

  const c = tensorflow.layers.dense({
    units: classes,
    kernelInitializer: "varianceScaling",
    useBias: false,
    activation: "softmax"
  });

  const config = {
    layers: [...truncated.layers, a, b, c]
  };

  const graph = tensorflow.sequential(config);

  graph.compile({
    optimizer: options.optimizationFunction,
    metrics: options.metrics,
    loss: options.lossFunction
  });

  return graph;
};
