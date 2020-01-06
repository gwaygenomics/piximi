import {Category, FitOptions, Image} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import {generate, encodeCategory, encodeImage} from "./generate";

export const fit = async (
  categories: Array<Category>,
  images: Array<Image>,
  graph: tensorflow.LayersModel,
  options: FitOptions
) => {
  const generator = generate(categories, images);

  const dataset = tensorflow.data
    .generator(generator)
    .map(encodeCategory(categories.length))
    .mapAsync(encodeImage)
    .batch(16);

  return await graph.fitDataset(dataset, {
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(logs.loss);
      }
    },
    epochs: options.epochs
  });
};
