import {put, takeLatest} from "redux-saga/effects";
import {compile, watchCompile} from "./compile";
import * as classifier from "@piximi/models";
import * as actions from "../../actions";
import {Loss, Metric, Optimizer} from "@piximi/types";
import {LayersModel} from "@tensorflow/tfjs";

describe("compile", () => {
  it("dispatches the 'compile' action", () => {
    const saga = watchCompile();

    expect(saga.next().value).toEqual(takeLatest("compile", compile));

    expect(saga.next().done).toBeTruthy();
  });

  it("executes the `compile` function", async () => {
    const pathname =
      "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

    const classes = 10;

    const units = 100;

    const opened = await classifier.open(pathname, classes, units);

    const options = {
      learningRate: 0.01,
      lossFunction: Loss.CategoricalCrossentropy,
      metrics: [Metric.CategoricalAccuracy],
      optimizationFunction: Optimizer.SGD
    };

    const compiled: LayersModel = await classifier.compile(opened, options);

    const generator = compile(
      actions.compile({opened: opened, options: options})
    );

    await generator.next();

    const actual = generator.next(compiled).value;

    const payload = {compiled: compiled};

    const expected = put(actions.compiled(payload));

    expect(actual["payload"]["action"]["payload"]).toEqual(
      expected["payload"]["action"]["payload"]
    );

    expect(generator.next().done).toBeTruthy();
  });
});
