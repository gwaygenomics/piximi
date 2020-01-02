import * as tensorflow from "@tensorflow/tfjs";

export const mobilenetv1 = async (
  classes: number,
  pathOrIOHandler: string | tensorflow.io.IOHandler,
  units: number
): Promise<tensorflow.LayersModel> => {
  return await tensorflow.loadLayersModel(pathOrIOHandler).then((graph) => {
    const truncated = tensorflow.model({
      inputs: graph.inputs,
      outputs: graph.getLayer("conv_pw_13_relu").output
    });

    const a = tensorflow.layers.flatten({
      inputShape: truncated.outputs[0].shape.slice(1)
    });

    const b = tensorflow.layers.dense({
      units: units,
      activation: "relu",
      kernelInitializer: "varianceScaling",
      useBias: true
    });

    const softmax = tensorflow.layers.dense({
      units: classes,
      kernelInitializer: "varianceScaling",
      useBias: false,
      activation: "softmax"
    });

    const config = {
      layers: [...truncated.layers, a, b, softmax]
    };

    return tensorflow.sequential(config);
  });
};
