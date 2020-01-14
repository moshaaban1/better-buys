import { createSelector } from "reselect";

const selectCategories = state => state.categories.categories;

export const selectCategoriesPreview = createSelector(
   [selectCategories],
   categories => Object.keys(categories).map(category => categories[category])
);

export const selectCategoriesItems = createSelector(
   [selectCategoriesPreview],
   categories => categories
);
