import { createSelector } from "reselect";

// Input Selector
export const cartItems = state => state.cart.cartItems;

export const selectItemsCount = state =>
   state.cart.cartItems.length
      ? state.cart.cartItems.reduce((total, curr) => {
           return total + curr.quantity;
        }, 0)
      : 0;

// Reselect's Selector
// const selectItemsCount = createSelector(
//    ([cartItems],
//    items =>
//       items.length
//          ? state.cart.cartItems.reduce((total, curr) => {
//               return total + curr.quantity;
//            }, 0)
//          : 0)
// );
