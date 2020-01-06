import {Category, Image} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";
import axios from "axios";
import * as ImageJS from "image-js";

export const encode = (depth: number) => {
  return (item: {xs: string; ys: number}) => {
    return {...item, ys: tensorflow.oneHot(item.ys, depth)};
  };
};

export const get = async (item: {xs: string; ys: number}) => {
  const response = await axios.get(item.xs, {responseType: "arraybuffer"});

  return {xs: Buffer.from(response.data, "binary"), ...item};
};

// export const open = async (image: Image): Promise<HTMLCanvasElement> => {
//   const buffer: Buffer = await get(image.data);

//   const data: ImageJS.Image = await ImageJS.Image.load(buffer);

//   return data.getCanvas();
// };

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
