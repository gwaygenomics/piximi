import {Category, FitOptions, Image} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";

export const fit = async (
  categories: Array<Category>,
  images: Array<Image>,
  graph: tensorflow.LayersModel,
  options: FitOptions
) => {
  const x: Array<tensorflow.Tensor> = images.map((image: Image) => {
    const data = new HTMLImageElement();

    data.src = image.data;

    return tensorflow.browser.fromPixels(data);
  });

  const y: Array<tensorflow.Tensor> = images.map((image: Image) => {
    const index: number = categories.findIndex((category: Category) => {
      return category.identifier === image.categoryIdentifier;
    });

    return tensorflow.oneHot(index, categories.length);
  });

  return await graph.fit(x, y, {epochs: options.epochs});
};
