import React from "react";
import Navbar from "../components/navbar/navbar.component.jsx";
import Footer from "../components/footer/footer.component.jsx";

function defaultLayout(props) {
   return (
      <>
         <Navbar />
         {props.children}
         <Footer />
      </>
   );
}

export default defaultLayout;
