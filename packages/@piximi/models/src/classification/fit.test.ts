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
import {open} from "./open";
import {encodeCategory, encodeImage, generate} from "./generate";
import {Dataset} from "@tensorflow/tfjs-data";
import {Tensor} from "@tensorflow/tfjs";

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
    const opened = await open(path, categories.length, 100);

    const options = {
      learningRate: 0.01,
      lossFunction: Loss.CategoricalCrossentropy,
      metrics: [Metric.CategoricalAccuracy],
      optimizationFunction: Optimizer.SGD
    };

    const compiled = await compile(opened, options);

    const data: Dataset<{xs: Tensor; ys: Tensor}> = await generate(
      images,
      categories
    );

    if (compiled) {
      const history = await fit(compiled, data, data, {
        epochs: 3,
        initialEpoch: 0
      });

      expect(history.epoch).toEqual([0, 1, 2]);
    } else {
      expect(true).toBe(false);
    }
  });
});
