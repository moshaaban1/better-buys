import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
   [selectShop],
   shop => shop.collections
);

export const selectCollectionsByCount = collectionCount =>
   createSelector(
      [selectCollections],
      collections =>
         collections.map(collection => ({
            ...collection,
            items: collection.items.slice(0, collectionCount)
         }))
   );

export const selectCollection = collectionId =>
   createSelector(
      [selectCollections],
      collections =>
         collections.find(
            collection =>
               collection.title.toLocaleLowerCase() ===
               collectionId.toLocaleLowerCase()
         )
   );
