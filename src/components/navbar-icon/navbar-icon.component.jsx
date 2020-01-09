import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartMenu } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.reselect";

import { ReactComponent as ShoppingBag } from "../../assets/images/shopping-bag.svg";
import "./navbar-icon.styles.scss";

function NavbarIcon({ dispatch, cartItemsCount }) {
   return (
      <li className="navbar-icon" onClick={() => dispatch(toggleCartMenu())}>
         <span className="navbar-cart-count">{cartItemsCount}</span>
         <ShoppingBag />
      </li>
   );
}

const mapStateToProps = createStructuredSelector({
   cartItemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(NavbarIcon);
