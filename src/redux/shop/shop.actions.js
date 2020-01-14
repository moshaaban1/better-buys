import types from "./shop.types";

export const updateCollections = collections => ({
   type: types.UPDATE_COLLECTIONS,
   payload: collections
});
