const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = item => ({
   type: ADD_ITEM,
   payload: item
});

export const removeItem = item => ({
   type: REMOVE_ITEM,
   payload: item
});
