import types from "./cart.types";
import { checkItemExist } from "./cart.utils";

const INITIAL_STATE = {
   drawerStatus: false,
   cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case types.TOGGLE_DRAWER_CART:
         return {
            ...state,
            drawerStatus: !state.drawerStatus
         };
      case types.ADD_ITEM_TO_CART:
         return {
            ...state,
            cartItems: checkItemExist(state.cartItems, action.payload)
         };
      default:
         return state;
   }
};

export default cartReducer;
