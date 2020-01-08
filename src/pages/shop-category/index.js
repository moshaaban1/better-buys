import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Products from "../../components/products/products.component";

import SHOP_DATA from "./shop.data";

export default class Shop extends Component {
   state = {
      products: []
   };

   location = this.props.match.params.category;

   componentDidMount() {
      const categoryProducts = SHOP_DATA.filter(
         p => p.title.toLowerCase() === this.location
      )[0].items;
      this.setState({
         products: categoryProducts
      });
   }

   render() {
      return (
         <main>
            <Container>
               <h1>{this.location.toUpperCase()}</h1>
               <Products products={this.state.products} />
            </Container>
         </main>
      );
   }
}
