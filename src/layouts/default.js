import React from "react";

import Navbar from "../components/navbar/navbar.component";
import CartItemsMenu from "../components/cart-items-menu/cart-menu.components";
import Footer from "../components/footer/footer.component";
import { PageContent } from "./default.styles";

const defaultLayout = props => {
   return (
      <>
         <Navbar />
         <CartItemsMenu direction="right" />
         <PageContent>{props.children}</PageContent>
         <Footer />
      </>
   );
};

export default defaultLayout;
