import {put, takeLatest} from "redux-saga/effects";
import {compileSaga, watchCompileSaga} from "./compileSaga";
import {compile, mobilenetv1} from "@piximi/models";
import {compileAction, compiledAction} from "../actions/model";
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

describe("compileSaga", () => {
  it("dispatches the 'compileAction'", () => {
    const saga = watchCompileSaga();

    expect(saga.next().value).toEqual(takeLatest("compile", compileSaga));

    expect(saga.next().done).toBeTruthy();
  });

  it("executes the `compile` function", async () => {
    const opened = await mobilenetv1(classes, path, units);

    const mock = await compile(mobilenetv1(classes, path, units), options);

    const generator = compileSaga(
      compileAction({opened: opened, options: options})
    );

    await generator.next();

    expect(generator.next({compiled: mock}).value).toEqual(
      put(compiledAction({compiled: mock}))
    );

    expect(generator.next().done).toBeTruthy();
  });
});
