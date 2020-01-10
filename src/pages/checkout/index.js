import React from "react";
import { Container } from "@material-ui/core";
import CheckoutItems from "../../components/checkout-items/checkout-items";

const Checkout = () => (
   <main>
      <Container>
         <div className="page-content">
            <CheckoutItems />
         </div>
      </Container>
   </main>
);

export default Checkout;
