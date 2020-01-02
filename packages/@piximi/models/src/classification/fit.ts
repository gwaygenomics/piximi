import {FitOptions} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";

export const fit = async (
  graph: tensorflow.LayersModel,
  options: FitOptions
) => {
  const x = tensorflow.randomNormal([100, 224, 224, 3]);
  let y = tensorflow.randomUniform([100], 0, 9, "int32");
  y = tensorflow.oneHot(y, 10);

  return await graph.fit(x, y, {epochs: 2, verbose: 1});
};
