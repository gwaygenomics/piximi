import {Classifier, Image, Partition} from "@piximi/types";

export const getTestImages = (state: Classifier) => {
  return state.images.filter((image: Image) => {
    return image.partition == Partition.Test;
  });
};

export const getTrainingImages = (state: Classifier) => {
  return state.images.filter((image: Image) => {
    return image.partition == Partition.Training;
  });
};

export const getValidationImages = (state: Classifier) => {
  return state.images.filter((image: Image) => {
    return image.partition == Partition.Validation;
  });
};
