import {Image, Partition, Score} from "@piximi/types";
import {createAction} from "@reduxjs/toolkit";

export const createImage = createAction<{
  image: Image;
}>("create-image");

export const createImageScore = createAction<{
  identifier: string;
  score: Score;
}>("create-image-score");

export const deleteImage = createAction<{
  identifier: string;
}>("delete-image");

export const updateImageCategory = createAction<{
  identifier: string;
  categoryIdentifier: string;
}>("update-image-category");

export const updateImagePartition = createAction<{
  identifier: string;
  partition: Partition;
}>("update-image-partition");

export const updateImageVisibility = createAction<{
  identifier: string;
}>("update-image-visibility");
