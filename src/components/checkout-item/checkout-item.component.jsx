import React from "react";
import { connect } from "react-redux";

import {
   increaseItemQuantity,
   decreaseItemQuantity,
   removeCartItem
} from "../../redux/cart/cart.actions";

import {
   CheckoutItemContainer,
   ItemImg,
   ItemName,
   ItemControl,
   ItemQuantity
} from "./checkout-item";

const CheckoutItem = props => {
   const {
      imageUrl,
      name,
      id,
      price,
      quantity,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeCartItem
   } = props;
   return (
      <CheckoutItemContainer>
         <ItemImg src={imageUrl} alt={name} />
         <ItemName>{name}</ItemName>
         <span className="price">{price}$</span>
         <ItemControl>
            <button onClick={() => increaseItemQuantity(id)}>&#10094;</button>
            <ItemQuantity>{quantity}</ItemQuantity>
            <button onClick={() => decreaseItemQuantity(id)}>&#10095;</button>
         </ItemControl>
         <button onClick={() => removeCartItem(id)}>&#10005;</button>
      </CheckoutItemContainer>
   );
};

const mapDispatchToProps = dispatch => ({
   increaseItemQuantity: payload => dispatch(increaseItemQuantity(payload)),
   decreaseItemQuantity: payload => dispatch(decreaseItemQuantity(payload)),
   removeCartItem: payload => dispatch(removeCartItem(payload))
});

export default connect(
   null,
   mapDispatchToProps
)(CheckoutItem);
