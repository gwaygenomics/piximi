import {Category, FitOptions, Image} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import {generate} from "./generate";

export const fit = async (
  categories: Array<Category>,
  images: Array<Image>,
  graph: tensorflow.LayersModel,
  options: FitOptions
) => {
  const generator = generate(categories, images);

  const dataset = tensorflow.data.generator(generator).batch(16);

  return await graph.fitDataset(dataset, {epochs: options.epochs});
};
