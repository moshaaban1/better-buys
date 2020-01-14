import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import Button from "../button/button.component";
import { ProductContainer, ProductImg, ProductDetails } from "./product.styles";

function Product({ name, imageUrl, price, id, addItemToCart }) {
   return (
      <ProductContainer>
         <ProductImg src={imageUrl} alt="" />
         <ProductDetails>
            <span>{name}</span>
            <span>{price}$</span>
         </ProductDetails>
         <Button
            full
            onClick={() => addItemToCart({ name, imageUrl, price, id })}
         >
            add to cart
         </Button>
      </ProductContainer>
   );
}

const mapDispatchToProps = dispatch => ({
   addItemToCart: payload => dispatch(addItemToCart(payload))
});

export default connect(
   null,
   mapDispatchToProps
)(Product);
