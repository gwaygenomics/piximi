import {Category, Classifier, Image, Partition} from "@piximi/types";
import {createSelector} from "reselect";
import * as tensorflow from "@tensorflow/tfjs";
import * as ImageJS from "image-js";

type Iterator = {
  next: () => {
    done: boolean;
    value: tensorflow.TensorContainer;
  };
};

export const findCategoryIndex = (
  categories: Array<Category>,
  identifier: string
): number => {
  return categories.findIndex((category: Category) => {
    return category.identifier === identifier;
  });
};

export const iterator = (
  images: Array<Image>,
  categories: Array<Category>
): Iterator => {
  const imageCount = images.length;
  const categoryCount = categories.length - 1;

  let imageIndex = 0;

  const image: Image = images[imageIndex];

  const categoryIndex: number = findCategoryIndex(
    categories,
    image.categoryIdentifier
  );
  const category: number = categories[categoryIndex].index;

  const y = tensorflow.oneHot(tensorflow.tensor1d([category]), categoryCount);

  return {
    next: () => {
      let result;

      if (imageIndex < imageCount) {
        result = {
          done: false,
          value: [imageIndex, y]
        };

        imageIndex++;

        return result;
      }

      return {
        done: true,
        value: [imageIndex, y]
      };
    }
  };
};

export const getCategories = (state: Classifier): Array<Category> => {
  return state.categories;
};

export const getCategorizedImages = (state: Classifier) => {
  return state.images.filter((image: Image) => {
    return image.categoryIdentifier !== "00000000-0000-0000-0000-000000000000";
  });
};

export const getTestImages = (state: Classifier) => {
  return state.images.filter((image: Image) => {
    return image.partition == Partition.Test;
  });
};

export const getTrainingImages = (state: Classifier): Array<Image> => {
  return state.images.filter((image: Image) => {
    return image.partition == Partition.Training;
  });
};

export const getTrainingDataset = createSelector(
  [getCategories, getTrainingImages],
  (categories, images) => {
    return images;
  }
);

export const getValidationDataset = (state: Classifier) => {
  return state.images
    .filter((image: Image) => {
      return image.partition == Partition.Validation;
    })
    .map((image: Image) => {
      return [image.data, image.categoryIdentifier];
    });
};

export const getValidationImages = (state: Classifier) => {
  return state.images.filter((image: Image) => {
    return image.partition == Partition.Validation;
  });
};
