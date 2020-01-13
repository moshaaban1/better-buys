import React from "react";

import {
   CartItemContainer,
   CartItemDetails,
   CartItemImg,
   CartItemSpan
} from "./cart-item.styles";

function CartItem({ name, imageUrl, price, quantity }) {
   return (
      <CartItemContainer>
         <CartItemImg src={imageUrl} alt={name} />
         <CartItemDetails>
            <CartItemSpan>{name}</CartItemSpan>
            <CartItemSpan>
               {quantity} X {price}$
            </CartItemSpan>
         </CartItemDetails>
      </CartItemContainer>
   );
}

export default CartItem;
