import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsFetching } from "../../redux/shop/shop.reselect";

import ShopCollection from "../shop-collection/index";
import Collections from "../../components/collections-container/collections.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsWithSpinner = WithSpinner(Collections);
const CollectionWithSpinner = WithSpinner(ShopCollection);

const Shop = ({ fetchCollectionsStartAsync, isFetching, match }) => {
   useEffect(() => {
      fetchCollectionsStartAsync();
   }, []);

   return (
      <Container>
         <Route
            exact
            path={match.path}
            render={props => (
               <CollectionsWithSpinner isLoading={isFetching} {...props} />
            )}
         />
         <Route
            path={match.path + ":collectionId"}
            render={props => (
               <CollectionWithSpinner isLoading={isFetching} {...props} />
            )}
         />
      </Container>
   );
};

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

const mapStateToProps = createStructuredSelector({
   isFetching: selectIsFetching
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Shop);
