import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartMenu } from "../../redux/cart/cart.actions";
import {
   selectCartMenuStatus,
   selectCartItems
} from "../../redux/cart/cart.reselect";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-menu.styles.scss";

function CartItemsMenu({ menuStatus, cartItems, handleToggleMenu, direction }) {
   const history = useHistory();

   const handlePropagation = e => {
      e.stopPropagation();
   };

   return (
      <div
         className={`${"cart-items-container " + (menuStatus ? "active" : "")}`}
         onClick={handleToggleMenu}
      >
         <div
            className={`cart-items-menu ${direction +
               (menuStatus ? " active" : "")}`}
            onClick={handlePropagation}
         >
            {cartItems.length ? (
               <div className="cart-items">
                  {cartItems.map(item => (
                     <CartItem {...item} key={item.id} />
                  ))}
               </div>
            ) : (
               <div className="cart-empty">The cart is empty</div>
            )}

            <Button
               color="dark"
               size="md"
               transform="uppercase"
               width="100%"
               onClick={() => history.push("/checkout")}
            >
               go to checkout
            </Button>
         </div>
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
   menuStatus: selectCartMenuStatus,
   cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
   handleToggleMenu: () => dispatch(toggleCartMenu())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CartItemsMenu);
