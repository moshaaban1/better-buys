import React from "react";
import { connect } from "react-redux";

import {
   increaseItemQuantity,
   decreaseItemQuantity,
   removeCartItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

function CheckoutItem({
   imageUrl,
   name,
   id,
   price,
   quantity,
   increaseItemQuantity,
   decreaseItemQuantity,
   removeCartItem
}) {
   return (
      <div className="checkout-item">
         <img src={imageUrl} alt={name} />
         <span className="name">{name}</span>
         <span className="price">{price}$</span>
         <div className="item-control">
            <button onClick={() => increaseItemQuantity(id)}>&#10094;</button>
            <span className="quantity">{quantity}</span>
            <button onClick={() => decreaseItemQuantity(id)}>&#10095;</button>
         </div>
         <button onClick={() => removeCartItem(id)}>&#10005;</button>
      </div>
   );
}

const mapDispatchToProps = dispatch => ({
   increaseItemQuantity: payload => dispatch(increaseItemQuantity(payload)),
   decreaseItemQuantity: payload => dispatch(decreaseItemQuantity(payload)),
   removeCartItem: payload => dispatch(removeCartItem(payload))
});

export default connect(
   null,
   mapDispatchToProps
)(CheckoutItem);
