import React, { Component } from "react";
import DefaultLayout from "../../layouts/default";
import { Container } from "@material-ui/core";

export default class Shop extends Component {
   state = {
      products: [1, 2, 3, 4, 5, 6, 7, 8]
   };

   render() {
      return (
         <DefaultLayout>
            <Container>
               <main>
                  <h1>Shop</h1>
               </main>
            </Container>
         </DefaultLayout>
      );
   }
}
