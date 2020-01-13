import {Category, Image} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import {Tensor} from "@tensorflow/tfjs";
import * as ImageJS from "image-js";
import {Dataset} from "@tensorflow/tfjs-data";

export const encodeCategory = (categories: number) => {
  return (item: {
    xs: string;
    ys: number;
  }): {xs: string; ys: tensorflow.Tensor} => {
    return {...item, ys: tensorflow.oneHot(item.ys, categories)};
  };
};

export const encodeImage = async (item: {
  xs: string;
  ys: tensorflow.Tensor;
}): Promise<{xs: tensorflow.Tensor; ys: tensorflow.Tensor}> => {
  const fetched = await tensorflow.util.fetch(item.xs);

  const buffer: ArrayBuffer = await fetched.arrayBuffer();

  const data: ImageJS.Image = await ImageJS.Image.load(buffer);

  const canvas: HTMLCanvasElement = data.getCanvas();

  const xs: tensorflow.Tensor3D = tensorflow.browser.fromPixels(canvas);

  return new Promise((resolve) => {
    return resolve({...item, xs: xs});
  });
};

export const generator = (
  categories: Array<Category>,
  images: Array<Image>
) => {
  const count = images.length;

  return function*() {
    let index = 0;

    while (index < count) {
      const image = images[index];

      const ys = categories.findIndex((category: Category) => {
        if (category.identifier !== "00000000-0000-0000-0000-00000000000") {
          return category.identifier === image.categoryIdentifier;
        }
      });

      yield {
        xs: image.data,
        ys: ys
      };

      index++;
    }
  };
};

export const generate = async (
  images: Array<Image>,
  categories: Array<Category>
): Promise<Dataset<{xs: Tensor; ys: Tensor}>> => {
  return tensorflow.data
    .generator(generator(categories, images))
    .map(encodeCategory(categories.length))
    .mapAsync(encodeImage);
};
