import React from "react";
import { Container } from "@material-ui/core";
import SHOP_DATA from "./shop.data";
import Collections from "../../components/collections-container/collections.component";

const collections = SHOP_DATA;

const Shop = () => (
   <main>
      <Container>
         <Collections collections={collections} />
      </Container>
   </main>
);

export default Shop;
