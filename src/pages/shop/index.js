import React from "react";
import { Route } from "react-router-dom";

import { Container } from "@material-ui/core";
import ShopCollection from "../shop-collection/index";
import Collections from "../../components/collections-container/collections.component";

const Shop = ({ match }) => {
   return (
      <main>
         <Container>
            <Route exact path={match.path} component={Collections} />
            <Route
               path={match.path + ":collectionId"}
               component={ShopCollection}
            />
         </Container>
      </main>
   );
};

export default Shop;
