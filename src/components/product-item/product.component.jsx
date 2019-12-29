import React from "react";
import "./product.styles.scss";

export default function Product({ name, imageUrl, price, id }) {
   const addToCart = id => {
      console.log(id);
   };

   return (
      <div className="product" onClick={() => addToCart(id)}>
         <img src={imageUrl} alt="" />
         <div className="details">
            <div className="product-name">{name}</div>
            <span className="product-price">{price}$</span>
         </div>
      </div>
   );
}
