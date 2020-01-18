import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectIsFetching = createSelector(
   [selectShop],
   shop => shop.isFetching
);

export const selectCollections = createSelector(
   [selectShop],
   shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
   [selectCollections],
   collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollectionsByCount = collectionCount =>
   createSelector(
      [selectCollectionsForPreview],
      collections =>
         collections.map(collection => ({
            ...collection,
            items: collection.items.slice(0, collectionCount)
         }))
   );

export const selectCollection = collectionId =>
   createSelector(
      [selectCollections],
      collections => collections[collectionId]
   );
