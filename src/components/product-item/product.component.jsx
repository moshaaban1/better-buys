import React from "react";
import Button from "../button/button.component";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import "./product.styles.scss";

function Product({ name, imageUrl, price, id, dispatch }) {
   const addToCart = item => {
      dispatch(addItemToCart(item));
   };

   return (
      <div className="product">
         <img src={imageUrl} alt="" />
         <div className="details">
            <div className="product-name">{name}</div>
            <span className="product-price">{price}$</span>
         </div>
         <Button
            color="dark"
            size="md"
            width="100%"
            transform="uppercase"
            onClick={() => addToCart({ name, imageUrl, price, id })}
         >
            add to cart
         </Button>
      </div>
   );
}

export default connect(null)(Product);
