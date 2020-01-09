import React from "react";
import { connect } from "react-redux";

import {
   increaseItemQuantity,
   decreaseItemQuantity
} from "../../redux/cart/cart.actions";

function CheckoutItem({
   imageUrl,
   name,
   id,
   price,
   quantity,
   increaseItemQuantity,
   decreaseItemQuantity
}) {
   return (
      <div className="checkout-item">
         <img src={imageUrl} alt={name} />
         <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
               {quantity} X {price}$
            </span>
         </div>
         <button onClick={() => increaseItemQuantity(id)}>Increase</button>
         <button onClick={() => decreaseItemQuantity(id)}>Decrease</button>
      </div>
   );
}

const mapDispatchToProps = dispatch => ({
   increaseItemQuantity: payload => dispatch(increaseItemQuantity(payload)),
   decreaseItemQuantity: payload => dispatch(decreaseItemQuantity(payload))
});

export default connect(
   null,
   mapDispatchToProps
)(CheckoutItem);
