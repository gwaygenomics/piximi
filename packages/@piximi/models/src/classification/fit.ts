import {Category, FitOptions, Image} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";

export const fit = async (
  categories: Array<Category>,
  images: Array<Image>,
  graph: tensorflow.LayersModel,
  options: FitOptions
) => {
  return await graph.fitDataset(dataset, {epochs: options.epochs});
};
