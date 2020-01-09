import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.reselect";

import CheckoutItem from "../checkout-item/checkout-item.component";

import "./checkout-items.styles.scss";

function CheckoutItems({ cartItems }) {
   return (
      <div className="checkout">
         <ul className="checkout-header">
            <li>product</li>
            <li>description</li>
            <li>quantity</li>
            <li>price</li>
            <li>remove</li>
         </ul>
         <div className="checkout-items">
            {cartItems.length
               ? cartItems.map(item => <CheckoutItem {...item} key={item.id} />)
               : null}
         </div>
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutItems);
