import * as tensorflow from "@tensorflow/tfjs";

export enum Architecture {
  MobileNet_128_025_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_025_128/classification/3/default/1",
  MobileNet_128_050_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_050_128/classification/3/default/1",
  MobileNet_128_075_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_075_128/classification/3/default/1",
  MobileNet_128_100_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_100_128/classification/3/default/1",
  MobileNet_160_025_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_025_160/classification/3/default/1",
  MobileNet_160_050_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_050_160/classification/3/default/1",
  MobileNet_160_075_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_075_160/classification/3/default/1",
  MobileNet_160_100_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_100_160/classification/3/default/1",
  MobileNet_192_025_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_025_192/classification/3/default/1",
  MobileNet_192_050_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_050_192/classification/3/default/1",
  MobileNet_192_075_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_075_192/classification/3/default/1",
  MobileNet_192_100_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_100_192/classification/3/default/1",
  MobileNet_224_025_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_025_224/classification/3/default/1",
  MobileNet_224_050_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_050_224/classification/3/default/1",
  MobileNet_224_075_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_075_224/classification/3/default/1",
  MobileNet_224_100_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_100_224/classification/3/default/1",
  MobileNet_096_035_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_035_96/classification/3/default/1",
  MobileNet_096_050_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_050_96/classification/3/default/1",
  MobileNet_096_075_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_075_96/classification/3/default/1",
  MobileNet_096_100_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_96/classification/3/default/1",
  MobileNet_128_035_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_035_128/classification/3/default/1",
  MobileNet_128_050_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_050_128/classification/3/default/1",
  MobileNet_128_075_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_075_128/classification/3/default/1",
  MobileNet_128_100_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_128/classification/3/default/1",
  MobileNet_160_035_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_035_160/classification/3/default/1",
  MobileNet_160_050_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_050_160/classification/3/default/1",
  MobileNet_160_075_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_075_160/classification/3/default/1",
  MobileNet_160_100_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_160/classification/3/default/1",
  MobileNet_192_035_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_035_192/classification/3/default/1",
  MobileNet_192_050_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_050_192/classification/3/default/1",
  MobileNet_192_075_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_075_192/classification/3/default/1",
  MobileNet_192_100_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_192/classification/3/default/1",
  MobileNet_224_035_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_035_224/classification/3/default/1",
  MobileNet_224_050_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_050_224/classification/3/default/1",
  MobileNet_224_075_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_075_224/classification/3/default/1",
  MobileNet_224_100_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/3/default/1",
  MobileNet_224_130_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_130_224/classification/3/default/1",
  MobileNet_224_140_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_140_224/classification/3/default/1",
  ResNet_050_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/resnet_v1_50/classification/3/default/1",
  ResNet_101_V1 = "https://tfhub.dev/google/tfjs-model/imagenet/resnet_v1_101/classification/3/default/1",
  ResNet_050_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/resnet_v2_50/classification/3/default/1",
  ResNet_101_V2 = "https://tfhub.dev/google/tfjs-model/imagenet/resnet_v2_101/classification/3/default/1"
}

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
  learningRate: number;
  lossFunction: Loss | Array<Loss> | {[outputName: string]: Loss};
  metrics: Metric | Array<Metric> | {[outputName: string]: Metric};
  optimizationFunction: Optimizer;
};

export enum Optimizer {
  Adadelta = "Adadelta",
  Adagrad = "Adagrad",
  Adam = "Adam",
  Adamax = "Adamax",
  RMSProp = "RMSProp",
  SGD = "SGD"
}

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

export const DefaultCompileOptions: CompileOptions = {
  learningRate: 0.01,
  lossFunction: Loss.BinaryCrossentropy,
  metrics: Metric.BinaryAccuracy,
  optimizationFunction: Optimizer.Adadelta
};

export type FitOptions = {
  epochs: number;
  initialEpoch: number;
};

export const DefaultFitOptions: FitOptions = {
  epochs: 10,
  initialEpoch: 1
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

export type Model = {
  compileOptions?: CompileOptions;
  fitOptions?: FitOptions;
  graph?: tensorflow.LayersModel;
};

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
