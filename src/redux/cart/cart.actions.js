import types from "./cart.types";

export const toggleCartMenu = () => ({
   type: types.TOGGLE_CART_MENU
});

export const addItemToCart = item => ({
   type: types.ADD_ITEM_TO_CART,
   payload: item
});

export const removeItem = item => ({
   type: types.REMOVE_ITEM_FROM_CART,
   payload: item
});
