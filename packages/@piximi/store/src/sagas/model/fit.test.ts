import "@tensorflow/tfjs-node";
import {put, takeLatest} from "redux-saga/effects";
import {fit, watchFit} from "./fit";
import * as classifier from "@piximi/models";
import * as actions from "../../actions";
import {
  Category,
  Image,
  Loss,
  Metric,
  Optimizer,
  Partition
} from "@piximi/types";

jest.setTimeout(50000);

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

describe("fit", () => {
  it("dispatches the 'fit' action", () => {
    const saga = watchFit();

    expect(saga.next().value).toEqual(takeLatest("fit", fit));

    expect(saga.next().done).toBeTruthy();
  });

  it("executes the `fit` function", async () => {
    const pathname =
      "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

    const units = 100;

    const opened = await classifier.open(pathname, categories.length, units);

    const options = {
      learningRate: 0.01,
      lossFunction: Loss.CategoricalCrossentropy,
      metrics: [Metric.CategoricalAccuracy],
      optimizationFunction: Optimizer.SGD
    };

    const compiled = await classifier.compile(opened, options);

    const data = await classifier.generate(images, categories);

    const {fitted, status} = await classifier.fit(compiled, data, data, {
      epochs: 1,
      initialEpoch: 0
    });

    const payload = {
      compiled: compiled,
      data: data,
      validationData: data,
      options: {
        epochs: 1,
        initialEpoch: 0
      }
    };

    const generator = fit(actions.fit(payload));

    await generator.next();

    expect(generator.next({fitted: fitted, status: status}).value).toEqual(
      put(actions.fitted({fitted: fitted, status: status}))
    );

    expect(generator.next().done).toBeTruthy();
  });
});
