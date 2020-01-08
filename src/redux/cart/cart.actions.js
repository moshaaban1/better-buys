import types from "./cart.types";

export const toggleDrawer = () => ({
   type: types.TOGGLE_DRAWER_CART
});

export const addItemToCart = item => ({
   type: types.ADD_ITEM_TO_CART,
   payload: item
});

export const removeItem = item => ({
   type: types.REMOVE_ITEM_FROM_CART,
   payload: item
});
