import "@tensorflow/tfjs-node";

import {
  Loss,
  Metric,
  Image,
  Optimizer,
  Partition,
  Category
} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";

import {compile} from "./compile";
import {fit} from "./fit";
import {mobilenetv1} from "./mobilenetv1";

tensorflow.setBackend("tensorflow");

jest.setTimeout(50000);

const categories: Array<Category> = [
  {
    description: "a",
    identifier: "11111111-1111-1111-1111-11111111111",
    index: 1,
    visualization: {
      color: "#FFFFFF",
      visible: true
    }
  },
  {
    description: "b",
    identifier: "22222222-2222-2222-2222-22222222222",
    index: 2,
    visualization: {
      color: "#FFFFFF",
      visible: true
    }
  }
];

const images: Array<Image> = [
  {
    categoryIdentifier: "11111111-1111-1111-1111-11111111111",
    checksum: "",
    data: "https://picsum.photos/seed/piximi/224",
    identifier: "11111111-1111-1111-1111-11111111111",
    partition: Partition.Training,
    scores: [],
    visualization: {
      brightness: 0,
      contrast: 0,
      visible: true,
      visibleChannels: []
    }
  },
  {
    categoryIdentifier: "22222222-2222-2222-2222-22222222222",
    checksum: "",
    data: "https://picsum.photos/seed/piximi/224",
    identifier: "22222222-2222-2222-2222-22222222222",
    partition: Partition.Training,
    scores: [],
    visualization: {
      brightness: 0,
      contrast: 0,
      visible: true,
      visibleChannels: []
    }
  }
];

const path =
  "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

describe("fit", () => {
  it("metricsNames", async () => {
    const promise = mobilenetv1(categories.length, path, 100);

    const options = {
      learningRate: 0.01,
      lossFunction: Loss.CategoricalCrossentropy,
      metrics: [Metric.CategoricalAccuracy],
      optimizationFunction: Optimizer.SGD
    };

    const graph = await compile(promise, options);

    if (graph) {
      const history = await fit(categories, images, graph, {
        epochs: 2,
        initialEpoch: 0
      });

      expect(history.epoch).toEqual([0, 1]);
    }
  });
});
