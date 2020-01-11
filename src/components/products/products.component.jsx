import React from "react";

import Product from "../product-item/product.component.jsx";
import "./products.styles.scss";

const Products = ({ products }) => (
   <div className="products">
      {products.map(product => (
         <Product {...product} key={product.name} />
      ))}
   </div>
);

export default Products;
