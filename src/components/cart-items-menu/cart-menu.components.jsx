import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartMenu } from "../../redux/cart/cart.actions";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-menu.styles.scss";

function CartItemsMenu({ menuStatus, cartItems, dispatch, direction }) {
   const history = useHistory();

   const handleToggleMenu = () => {
      dispatch(toggleCartMenu());
   };

   const handleChildClick = e => {
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
            onClick={handleChildClick}
         >
            <div className="cart-items">
               {cartItems.map(item => (
                  <CartItem {...item} key={item.id} />
               ))}
            </div>

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

const mapStateToProps = state => ({
   menuStatus: state.cart.menuStatus,
   cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartItemsMenu);
