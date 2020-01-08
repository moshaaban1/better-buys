import React from "react";
import Navbar from "../components/navbar/navbar.component";
import Drawer from "../components/drawer/drawer.component";
import Footer from "../components/footer/footer.component";

function defaultLayout(props) {
   return (
      <>
         <Navbar />
         <Drawer direction="right" />
         {props.children}
         <Footer />
      </>
   );
}

export default defaultLayout;
