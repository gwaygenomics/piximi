import * as tensorflow from "@tensorflow/tfjs";

export type Category = {
  description: string;
  identifier: string;
  index: number;
  visualization: CategoryVisualization;
};

export type CategoryVisualization = {
  color: string;
  visible: boolean;
};

export type Classifier = {
  categories: Array<Category>;
  compileOptions?: CompileOptions;
  fitOptions?: FitOptions;
  images: Array<Image>;
  name: string;
};

export type CompileOptions = {
  loss: Loss | Array<Loss> | {[outputName: string]: Loss};
  metrics: Metric | Array<Metric> | {[outputName: string]: Metric};
  optimizer: Optimizer;
};

export type FitOptions = {
  epochs: number;
  initialEpoch: number;
};

export type Image = {
  categoryIdentifier: string;
  checksum: string;
  data: string;
  identifier: string;
  partition: Partition;
  scores: Score[];
  visualization: ImageVisualization;
};

export type ImageVisualization = {
  brightness: number;
  contrast: number;
  visible: boolean;
  visibleChannels: number[];
};

export enum Loss {
  BinaryCrossentropy = "binaryCrossentropy",
  CategoricalCrossentropy = "categoricalCrossentropy",
  CategoricalHinge = "categoricalHinge",
  CosineProximity = "cosineProximity",
  Hinge = "hinge",
  KullbackLeiblerDivergence = "kullbackLeiblerDivergence",
  Logcosh = "logcosh",
  MeanAbsoluteError = "meanAbsoluteError",
  MeanAbsolutePercentageError = "meanAbsolutePercentageError",
  MeanSquaredError = "meanSquaredError",
  MeanSquaredLogarithmicError = "meanSquaredLogarithmicError",
  Poisson = "poisson",
  SparseCategoricalCrossentropy = "sparseCategoricalCrossentropy",
  SquaredHinge = "squaredHinge"
}

export enum Metric {
  BinaryAccuracy = "binaryAccuracy",
  CategoricalAccuracy = "categoricalAccuracy",
  CategoricalCrossentropy = "categoricalCrossentropy",
  Cosine = "cosine",
  MAE = "MAE",
  MAPE = "MAPE",
  MSE = "MSE",
  Precision = "precision",
  SparseCategoricalCrossentropy = "sparseCategoricalCrossentropy"
}

export enum Optimizer {
  Adadelta = "Adadelta",
  Adagrad = "Adagrad",
  Adam = "Adam",
  Adamax = "Adamax",
  RMSProp = "RMSProp",
  SGD = "SGD"
}

export enum Partition {
  Training,
  Validation,
  Test
}

export type Score = {
  categoryIdentifier: string;
  probability: number;
};

export type Settings = {
  spinner: {
    spinning: boolean;
  };
};
