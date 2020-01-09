import types from "./cart.types";
import {
   checkItemExist,
   increaseAndDecreaseHandler,
   removeCartItem
} from "./cart.utils";

const INITIAL_STATE = {
   menuStatus: false,
   cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case types.TOGGLE_CART_MENU:
         return {
            ...state,
            menuStatus: !state.menuStatus
         };
      case types.ADD_ITEM_TO_CART:
         return {
            ...state,
            cartItems: checkItemExist(state.cartItems, action.payload)
         };
      case types.REMOVE_ITEM_FROM_CART:
         return {
            ...state,
            cartItems: removeCartItem(state.cartItems, action.payload)
         };
      case types.INCREASE_ITEM_QUANTITY:
         return {
            ...state,
            cartItems: increaseAndDecreaseHandler(
               state.cartItems,
               action.payload,
               "increase"
            )
         };
      case types.DECREASE_ITEM_QUANTITY:
         return {
            ...state,
            cartItems: increaseAndDecreaseHandler(
               state.cartItems,
               action.payload,
               "decrease"
            )
         };
      default:
         return state;
   }
};

export default cartReducer;
