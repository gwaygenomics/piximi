import * as tensorflow from "@tensorflow/tfjs";

import {mobilenetv1} from "./mobilenetv1";

const path =
  "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

describe("mobilenetv1", () => {
  it("inputs", async () => {
    const graph: tensorflow.LayersModel = await mobilenetv1(10, path, 100);

    expect(graph.inputs.length).toEqual(1);
    expect(graph.inputs[0].shape).toEqual([null, 224, 224, 3]);
  });

  it("layers", async () => {
    const graph: tensorflow.LayersModel = await mobilenetv1(10, path, 100);

    expect(graph.layers.length).toEqual(85);
  });

  it("outputShape", async () => {
    const graph: tensorflow.LayersModel = await mobilenetv1(10, path, 100);

    expect(graph.outputShape).toEqual([null, 10]);
  });
});
