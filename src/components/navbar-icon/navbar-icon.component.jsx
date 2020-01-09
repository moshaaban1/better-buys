import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/images/shopping-bag.svg";
import { toggleCartMenu } from "../../redux/cart/cart.actions";
import { selectItemsCount } from "../../redux/cart/cart.reselect";
import { connect } from "react-redux";
import "./navbar-icon.styles.scss";

function NavbarIcon({ dispatch, cartItemsCount }) {
   return (
      <li className="navbar-icon" onClick={() => dispatch(toggleCartMenu())}>
         <span className="navbar-cart-count">{cartItemsCount}</span>
         <ShoppingBag />
      </li>
   );
}

const mapStateToProps = state => ({
   cartItemsCount: selectItemsCount(state)
});

export default connect(mapStateToProps)(NavbarIcon);
