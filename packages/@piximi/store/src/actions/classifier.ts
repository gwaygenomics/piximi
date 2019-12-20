import {createAction} from "@reduxjs/toolkit";
import {Category, Loss, Metric} from "@piximi/types";

export const createCategoryAction = createAction<{}>("create-category");

export const createClassifierAction = createAction<{}>("create-classifier");

export const openClassifierAction = createAction<{}>("open-classifier");

export const createImageAction = createAction<{}>("create-image");

export const createImagesAction = createAction<{}>("create-images");

export const createImagesScoreAction = createAction<{}>("create-images-score");

export const deleteCategoryAction = createAction<{}>("delete-category");

export const deleteImageAction = createAction<{}>("delete-image");

export const toggleCategoryVisibilityAction = createAction<{}>(
  "toggle-category-visibility"
);

export const updateCategoryColorAction = createAction<{}>(
  "update-category-color"
);

export const updateCategoryDescriptionAction = createAction<{}>(
  "update-category-description"
);

export const updateCategoryVisibilityAction = createAction<{}>(
  "update-category-visibility"
);

export const updateClassifierNameAction = createAction<{}>(
  "update-classifier-name"
);

export const updateImageBrightnessAction = createAction<{}>(
  "update-image-brightness"
);

export const updateImageCategoryAction = createAction<{}>(
  "update-image-category"
);

export const updateImagesCategoryAction = createAction<{}>(
  "update-images-category"
);

export const updateImageContrastAction = createAction<{}>(
  "update-image-contrast"
);

export const updateImageVisibilityAction = createAction<{}>(
  "update-image-visibility"
);

export const updateImagesPartitionAction = createAction<{}>(
  "update-images-partition"
);

export const updateCompileOptionsLearningRate = createAction<number>(
  "update-compile-options-learning-rate"
);

export const updateCompileOptionsLossFunction = createAction<Loss>(
  "update-compile-options-loss-function"
);

export const updateCompileOptionsMetrics = createAction<Array<Metric>>(
  "update-compile-options-metrics"
);

export const updateCompileOptionsOptimizationFunction = createAction<Metric[]>(
  "update-compile-options-optimization-function"
);
