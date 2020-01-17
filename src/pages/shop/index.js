import React from "react";
import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";
import { getCollectionsData } from "../../firebase/firebase.api";

import ShopCollection from "../shop-collection/index";
import Collections from "../../components/collections-container/collections.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsWithSpinner = WithSpinner(Collections);
const CollectionWithSpinner = WithSpinner(ShopCollection);
class Shop extends React.Component {
   state = {
      isLoading: true
   };

   async componentDidMount() {
      const collections = await getCollectionsData();

      this.props.handleUpdateCollections(collections);
      this.setState({ isLoading: false });
   }

   render() {
      const { match } = this.props;
      return (
         <Container>
            <Route
               exact
               path={match.path}
               render={props => (
                  <CollectionsWithSpinner
                     isLoading={this.state.isLoading}
                     {...props}
                  />
               )}
            />
            <Route
               path={match.path + ":collectionId"}
               render={props => (
                  <CollectionWithSpinner
                     isLoading={this.state.isLoading}
                     {...props}
                  />
               )}
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
