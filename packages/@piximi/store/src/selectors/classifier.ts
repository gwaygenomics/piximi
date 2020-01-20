import {CompileOptions, FitOptions} from "@piximi/types";
import {LayersModel, Tensor} from "@tensorflow/tfjs";
import {Dataset} from "@tensorflow/tfjs-data";

export const compileOptionsSelector = ({classifier}): CompileOptions => {
  return {
    learningRate: classifier.learningRate,
    lossFunction: classifier.lossFunction,
    metrics: classifier.metrics,
    optimizationFunction: classifier.optimizationFunction
  };
};

export const dataSelector = ({
  classifier
}): Dataset<{xs: Tensor; ys: Tensor}> => {
  return classifier.data;
};

export const fitOptionsSelector = ({classifier}): FitOptions => {
  return classifier.fitOptions;
};

export const modelSelector = ({classifier}): LayersModel => {
  return classifier.model;
};

export const validationDataSelector = ({
  classifier
}): Dataset<{xs: Tensor; ys: Tensor}> => {
  return classifier.validationData;
};
