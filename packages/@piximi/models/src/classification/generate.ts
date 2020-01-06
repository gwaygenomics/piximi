import {Category, Image} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import axios from "axios";
import * as ImageJS from "image-js";

export const get = async (image: string): Promise<Buffer> => {
  const response = await axios.get(image, {responseType: "arraybuffer"});

  return Buffer.from(response.data, "binary");
};

export const open = async (image: Image): Promise<HTMLCanvasElement> => {
  const buffer: Buffer = await get(image.data);

  const data: ImageJS.Image = await ImageJS.Image.load(buffer);

  return data.getCanvas();
};

export const generate = (categories: Array<Category>, images: Array<Image>) => {
  const count = images.length;

  return function*() {
    let index = 0;

    while (index < count) {
      const image = images[index];

      const xs = tensorflow.randomNormal([224, 224, 3]);

      const ys: number = categories.findIndex((category: Category) => {
        if (category.identifier !== "00000000-0000-0000-0000-00000000000") {
          return category.identifier === image.categoryIdentifier;
        }
      });

      index++;

      yield {xs: xs, ys: ys};
    }
  };
};
