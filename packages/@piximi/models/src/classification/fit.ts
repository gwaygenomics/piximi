import {Category, FitOptions, Image, Partition} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import {datasetIterator} from "./datasetIterator";

const generate = (categories: Array<Category>, images: Array<Image>) => {
  const count = images.length;

  return function*() {
    let index = 0;

    while (index < count) {
      const image = images[index];

      const xs = tensorflow.randomNormal([224, 224, 3]);

      const categoryIndex: number = categories.findIndex(
        (category: Category) => {
          if (category.identifier !== "00000000-0000-0000-0000-00000000000") {
            return category.identifier === image.categoryIdentifier;
          }
        }
      );

      const ys = tensorflow.oneHot(categoryIndex, categories.length);

      index++;

      yield {xs: xs, ys: ys};
    }
  };
};

export const fit = async (
  categories: Array<Category>,
  images: Array<Image>,
  graph: tensorflow.LayersModel,
  options: FitOptions
) => {
  // const iterator = datasetIterator(categories, images);

  const generator = generate(categories, images);

  const dataset = tensorflow.data.generator(generator).batch(16);

  return await graph.fitDataset(dataset, {epochs: options.epochs});
};
