import types from "./cart.types";

export const toggleDrawer = () => ({
   type: types.TOGGLE_DRAWER_CART
});

export const addItem = item => ({
   type: types.ADD_ITEM,
   payload: item
});

export const removeItem = item => ({
   type: types.REMOVE_ITEM,
   payload: item
});
