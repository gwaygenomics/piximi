import {createAction} from "@reduxjs/toolkit";
import {Category} from "@piximi/types";

export const createCategory = createAction<{category: Category}>(
  "create-category"
);

export const deleteCategory = createAction<{identifier: string}>(
  "delete-category"
);

export const updateCategoryColor = createAction<{
  identifier: string;
  color: string;
}>("update-category-color");

export const updateCategoryDescription = createAction<{
  identifier: string;
  description: string;
}>("update-category-description");

export const updateCategoryVisibility = createAction<{identifier: string}>(
  "update-category-visibility"
);
