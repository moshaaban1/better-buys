import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.reselect";

import { Container } from "@material-ui/core";
import Collection from "../../components/collection-container/collection-container.component";

const ShopCollection = ({ collection }) => (
   <main>
      <Container>
         {collection ? (
            <Collection {...collection} />
         ) : (
            <div>This collection has no products</div>
         )}
      </Container>
   </main>
);

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(ShopCollection);
