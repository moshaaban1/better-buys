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
import {
   CartMenuContainer,
   CartMenu,
   CartEmpty,
   CartItems
} from "./cart-menu.styles";

function CartItemsMenu({ menuStatus, cartItems, handleToggleMenu, direction }) {
   const history = useHistory();

   const handlePropagation = e => {
      e.stopPropagation();
   };

   const goToCheckOut = () => {
      history.push("/checkout");
      handleToggleMenu();
   };

   return (
      <CartMenuContainer active={menuStatus} onClick={handleToggleMenu}>
         <CartMenu active={menuStatus} onClick={handlePropagation}>
            {cartItems.length ? (
               <CartItems>
                  {cartItems.map(item => (
                     <CartItem {...item} key={item.id} />
                  ))}
               </CartItems>
            ) : (
               <CartEmpty>The cart is empty</CartEmpty>
            )}

            <Button inverted full onClick={goToCheckOut}>
               go to checkout
            </Button>
         </CartMenu>
      </CartMenuContainer>
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
