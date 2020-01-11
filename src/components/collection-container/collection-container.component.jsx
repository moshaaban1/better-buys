import React from "react";

import Products from "../products/products.component";
import "./collection.styles.scss";

const Collection = ({ title, items }) => (
   <div className="collection-container">
      <h2 className="collection-title">{title}</h2>
      <Products products={items.slice(0, 4)} />
   </div>
);

export default Collection;
