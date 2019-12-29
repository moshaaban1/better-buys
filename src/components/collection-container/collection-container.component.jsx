import React from "react";
import Products from "../products/products.component";
import "./collection.styles.scss";

export default function Collection({ title, items }) {
   return (
      <div className="collection-container">
         <h2 className="collection-title">{title}</h2>
         <Products products={items.slice(0, 4)} />
      </div>
   );
}
