import React from "react";
import { connect } from "react-redux";

import { selectCollectionsByCount } from "../../redux/shop/shop.reselect";

import Collection from "../collection-container/collection-container.component";
import "./collections.styles.scss";

const Collections = ({ collections }) => (
   <div className="collections-container">
      {collections.map(collection =>
         collection.items.length ? (
            <Collection {...collection} key={"collection" + collection.title} />
         ) : null
      )}
   </div>
);

const mapStateToProps = state => ({
   collections: selectCollectionsByCount(4)(state)
});

export default connect(mapStateToProps)(Collections);
