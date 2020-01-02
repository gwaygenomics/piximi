import {compile} from "./compile";
import {fit} from "./fit";
import {mobilenetv1} from "./mobilenetv1";
import {Loss, Metric, Optimizer} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import "@tensorflow/tfjs-node";

tensorflow.setBackend("tensorflow");

jest.setTimeout(50000);

const path =
  "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

describe("fit", () => {
  it("metricsNames", async () => {
    const promise = mobilenetv1(10, path, 100);

    const options = {
      learningRate: 0.01,
      lossFunction: Loss.CategoricalCrossentropy,
      metrics: [Metric.CategoricalAccuracy],
      optimizationFunction: Optimizer.SGD
    };

    const graph = await compile(promise, options);

    if (graph) {
      const history = await fit(graph, {epochs: 2, initialEpoch: 0});

      expect(history.epoch).toEqual([0, 1]);
    }
  });
});
