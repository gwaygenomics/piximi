import {put, takeLatest} from "redux-saga/effects";
import {compile, watchCompile} from "./compile";
import * as classifier from "@piximi/models";
import * as actions from "../../actions";
import {CompileOptions, Loss, Metric, Optimizer} from "@piximi/types";

const classes: number = 10;

const options: CompileOptions = {
  learningRate: 0.01,
  lossFunction: Loss.CategoricalCrossentropy,
  metrics: [Metric.CategoricalAccuracy],
  optimizationFunction: Optimizer.SGD
};

const path: string =
  "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

const units: number = 100;

describe("compile", () => {
  it("dispatches the 'compile' action", () => {
    const saga = watchCompile();

    expect(saga.next().value).toEqual(takeLatest("compile", compile));

    expect(saga.next().done).toBeTruthy();
  });

  it("executes the `compile` function", async () => {
    const opened = await classifier.mobilenetv1(classes, path, units);

    const mock = await classifier.compile(
      classifier.mobilenetv1(classes, path, units),
      options
    );

    const generator = compile(
      actions.compile({opened: opened, options: options})
    );

    await generator.next();

    expect(generator.next({compiled: mock}).value).toEqual(
      put(actions.compiled({compiled: mock}))
    );

    expect(generator.next().done).toBeTruthy();
  });
});
