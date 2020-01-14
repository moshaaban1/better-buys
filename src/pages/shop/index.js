import React from "react";
import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";
import { getCollectionsData } from "../../firebase/firebase.api";

import ShopCollection from "../shop-collection/index";
import Collections from "../../components/collections-container/collections.component";

class Shop extends React.Component {
   async componentDidMount() {
      const collections = await getCollectionsData();

      this.props.handleUpdateCollections(collections);
   }

   render() {
      return (
         <Container>
            <Route exact path={this.props.match.path} component={Collections} />
            <Route
               path={this.props.match.path + ":collectionId"}
               component={ShopCollection}
            />
         </Container>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   handleUpdateCollections: payload => dispatch(updateCollections(payload))
});

export default connect(
   null,
   mapDispatchToProps
)(Shop);
