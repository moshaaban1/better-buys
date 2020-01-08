import types from "./cart.types";

const INITIAL_STATE = {
   drawerStatus: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case types.TOGGLE_DRAWER_CART:
         return {
            ...state,
            drawerStatus: !state.drawerStatus
         };

      default:
         return state;
   }
};

export default cartReducer;
