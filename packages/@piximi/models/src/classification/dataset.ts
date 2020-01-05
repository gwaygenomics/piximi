import * as tensorflow from "@tensorflow/tfjs";
import {Category, Image} from "@piximi/types";

const dataset = (categories: Array<Category>, images: Array<Image>) => {
  const xs: Array<tensorflow.Tensor> = images.map((image: Image) => {
    const data = new HTMLImageElement();

    data.src = image.data;

    return tensorflow.browser.fromPixels(data);
  });

  const ys: Array<tensorflow.Tensor> = images.map((image: Image) => {
    const index: number = categories.findIndex((category: Category) => {
      return category.identifier === image.categoryIdentifier;
    });

    return tensorflow.oneHot(index, categories.length);
  });

  const count = xs.length;

  let index = 0;

  const iterator = {
    next: () => {
      let data: {
        done: boolean;
        value: [tensorflow.Tensor, tensorflow.Tensor];
      };

      if (index < count) {
        data = {
          done: false,
          value: [xs[index], ys[index]]
        };

        index++;

        return data;
      }

      return {
        done: true,
        value: [xs[index], ys[index]]
      };
    }
  };

  return iterator;
};
