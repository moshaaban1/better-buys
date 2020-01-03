import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Products from "../../components/products/products.component";

export default class Shop extends Component {
   state = {
      products: [1, 2, 3, 4, 5, 6, 7, 8]
   };

   render() {
      return (
         <main>
            <Container>
               <h1>{this.props.match.params.category.toUpperCase()}</h1>
               <Products products={this.state.products} />
            </Container>
         </main>
      );
   }
}
