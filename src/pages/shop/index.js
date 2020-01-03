import React, { Component } from "react";
import { Container } from "@material-ui/core";
import SHOP_DATA from "./shop.data";
import Collections from "../../components/collections-container/collections.component";

export default class Shop extends Component {
   state = {
      collections: SHOP_DATA
   };

   render() {
      return (
         <main>
            <Container>
               <Collections collections={this.state.collections} />
            </Container>
         </main>
      );
   }
}
