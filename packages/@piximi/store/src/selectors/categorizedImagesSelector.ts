import {Image} from "@piximi/types";

export const categorizedImagesSelector = ({project}) => {
  return project.images.filter((image: Image) => {
    return image.categoryIdentifier !== "00000000-0000-0000-0000-00000000000";
  });
};
