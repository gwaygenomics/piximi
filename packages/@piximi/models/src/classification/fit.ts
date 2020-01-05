import {Category, FitOptions, Image} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";

export const fit = async (
  categories: Array<Category>,
  images: Array<Image>,
  graph: tensorflow.LayersModel,
  options: FitOptions
) => {
  const x = tensorflow.randomNormal([100, 224, 224, 3]);

  const imageElements = images.map((image: Image) => {
    const data = new HTMLImageElement();
    data.src = image.data;

    return data;
  });

  const categoryIdentifiers = images.map((image: Image) => {
    return categories.findIndex((category: Category) => {
      return category.identifier === image.categoryIdentifier;
    });
  });

  const y = tensorflow.oneHot(categoryIdentifiers, categories.length);

  return await graph.fit(x, y, {epochs: 2, verbose: 1});
};
