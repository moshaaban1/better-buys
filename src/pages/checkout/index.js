import React from "react";
import { Container } from "@material-ui/core";
import CheckoutItems from "../../components/checkout-items/checkout-items";

export default function Checkout() {
   return (
      <main>
         <Container>
            <div className="page-content">
               <CheckoutItems />
            </div>
         </Container>
      </main>
   );
}
