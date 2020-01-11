import React from "react";

import Product from "../product-item/product.component.jsx";
import "./collection.styles.scss";

const Collection = ({ title, items }) => {
   return (
      <div className="collection-container">
         <h2 className="collection-title">{title}</h2>
         <div className="collection-items">
            {items.map(product => (
               <Product {...product} key={product.name} />
            ))}
         </div>
      </div>
   );
};

export default Collection;
