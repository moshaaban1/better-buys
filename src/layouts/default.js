import React from "react";
import Navbar from "../components/navbar/navbar.component";
import CartItemsMenu from "../components/cart-items-menu/cart-menu.components";
import Footer from "../components/footer/footer.component";

function defaultLayout(props) {
   return (
      <>
         <Navbar />
         <CartItemsMenu direction="right" />
         {props.children}
         <Footer />
      </>
   );
}

export default defaultLayout;
