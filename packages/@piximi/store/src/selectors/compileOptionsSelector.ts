export const compileOptionsSelector = ({classifier}) => {
  return {
    learningRate: classifier.learningRate,
    lossFunction: classifier.lossFunction,
    metrics: classifier.metrics,
    optimizationFunction: classifier.optimizationFunction
  };
};
