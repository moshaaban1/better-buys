import { createSelector } from "reselect";

const selectCategories = state => state.categories;

export const selectCategoriesItems = createSelector(
   [selectCategories],
   categories => categories.categories
);
