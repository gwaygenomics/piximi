import * as tensorflow from "@tensorflow/tfjs";

export const mobilenetv1 = async (
  pathOrIOHandler: string | tensorflow.io.IOHandler
): Promise<tensorflow.LayersModel> => {
  return await tensorflow.loadLayersModel(pathOrIOHandler);
};
