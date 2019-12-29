import React, { Component } from "react";
import DefaultLayout from "../../layouts/default";
import { Container } from "@material-ui/core";
import SHOP_DATA from "./shop.data";

export default class Shop extends Component {
   state = {
      collections: SHOP_DATA
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
