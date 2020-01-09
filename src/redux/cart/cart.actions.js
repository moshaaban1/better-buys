import types from "./cart.types";

export const toggleCartMenu = () => ({
   type: types.TOGGLE_CART_MENU
});

export const addItemToCart = item => ({
   type: types.ADD_ITEM_TO_CART,
   payload: item
});

export const removeCartItem = itemId => ({
   type: types.REMOVE_ITEM_FROM_CART,
   payload: itemId
});

export const increaseItemQuantity = itemId => ({
   type: types.INCREASE_ITEM_QUANTITY,
   payload: itemId
});

export const decreaseItemQuantity = itemId => ({
   type: types.DECREASE_ITEM_QUANTITY,
   payload: itemId
});
