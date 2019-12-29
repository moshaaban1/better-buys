import React from "react";
import Product from "../product-item/product.component.jsx";
import "./products.styles.scss";

export default function Products(props) {
   return (
      <div className="products">
         {props.products.map(product => (
            <Product {...product} key={product.name} />
         ))}
      </div>
   );
}
