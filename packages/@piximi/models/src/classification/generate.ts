import {Category, Image} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import axios from "axios";
import * as ImageJS from "image-js";

export const encode = (depth: number) => {
  return (item: {xs: string; ys: number}) => {
    return {...item, ys: tensorflow.oneHot(item.ys, depth)};
  };
};

export const encodeImage = async (item: {
  xs: string;
  ys: number;
}): Promise<{xs: tensorflow.Tensor3D; ys: number}> => {
  const fetched = await tensorflow.util.fetch(item.xs);

  const buffer: ArrayBuffer = await fetched.arrayBuffer();

  const data: ImageJS.Image = await ImageJS.Image.load(buffer);

  const canvas: HTMLCanvasElement = data.getCanvas();

  const xs: tensorflow.Tensor3D = tensorflow.browser.fromPixels(canvas);

  return new Promise((resolve) => {
    return resolve({...item, xs: xs});
  });
};

export const generate = (categories: Array<Category>, images: Array<Image>) => {
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
