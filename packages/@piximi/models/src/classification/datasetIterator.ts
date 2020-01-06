import * as tensorflow from "@tensorflow/tfjs";
import {Category, Image} from "@piximi/types";
import * as ImageJS from "image-js";
import axios from "axios";

export const get = async (image: string): Promise<Buffer> => {
  const response = await axios.get(image, {responseType: "arraybuffer"});

  return Buffer.from(response.data, "binary");
};

export const open = async (image: string): Promise<HTMLCanvasElement> => {
  const buffer: Buffer = await get(image);

  const data: ImageJS.Image = await ImageJS.Image.load(buffer);

  return data.getCanvas();
};

export const xs = (images: Array<Image>) => {
  return images.map(async (image: Image) => {
    const data: HTMLCanvasElement = await open(image.data);

    return data;
  });
};

export const datasetIterator = (
  categories: Array<Category>,
  images: Array<Image>
) => {
  const xs = images.map((image: Image) => {
    // console.log(data);

    // const canvas: HTMLCanvasElement = data.getCanvas();

    // return tensorflow.browser.fromPixels(promise);

    return tensorflow.randomNormal([1, 224, 224, 3]);
  });

  const ys: Array<tensorflow.Tensor> = images.map((image: Image) => {
    const index: number = categories.findIndex((category: Category) => {
      if (category.identifier !== "00000000-0000-0000-0000-00000000000") {
        return category.identifier === image.categoryIdentifier;
      }
    });

    return tensorflow.oneHot(index, categories.length).expandDims();
  });

  const count = xs.length;

  let index = 0;

  const iterator = {
    next: () => {
      const x = xs[index];
      const y = ys[index];

      let data: {
        done: boolean;
        value: [tensorflow.Tensor, tensorflow.Tensor];
      };

      if (index < count) {
        data = {
          done: false,
          value: [x, y]
        };

        index++;

        return data;
      }

      return {
        done: true,
        value: [x, y]
      };
    }
  };

  return iterator;
};
