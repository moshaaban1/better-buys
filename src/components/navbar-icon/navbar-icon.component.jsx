import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartMenu } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.reselect";

import {
   NavbarIconContainer,
   ShoppingIcon,
   NavbarCartCount
} from "./navbar-icon.styles";

function NavbarIcon({ dispatch, cartItemsCount }) {
   return (
      <NavbarIconContainer onClick={() => dispatch(toggleCartMenu())}>
         <NavbarCartCount>{cartItemsCount}</NavbarCartCount>
         <ShoppingIcon />
      </NavbarIconContainer>
   );
}

const mapStateToProps = createStructuredSelector({
   cartItemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(NavbarIcon);
