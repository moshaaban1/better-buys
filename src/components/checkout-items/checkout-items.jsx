import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.reselect";

import CheckoutItem from "../checkout-item/checkout-item.component";

function CheckoutItems({ cartItems }) {
   return (
      <div className="checkout-items">
         checkout items
         {cartItems.length
            ? cartItems.map(item => <CheckoutItem {...item} key={item.id} />)
            : null}
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutItems);
