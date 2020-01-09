import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
   [selectCart],
   cart => cart.cartItems
);

export const selectCartMenuStatus = createSelector(
   [selectCart],
   cart => cart.menuStatus
);

export const selectCartItemsCount = createSelector(
   [selectCartItems],
   items => {
      return items.length
         ? items.reduce((total, curr) => {
              return total + curr.quantity;
           }, 0)
         : 0;
   }
);
