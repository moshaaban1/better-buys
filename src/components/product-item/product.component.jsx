import React from "react";
import { connect } from "react-redux";

import Button from "../button/button.component";
import { addItemToCart } from "../../redux/cart/cart.actions";
import "./product.styles.scss";

function Product({ name, imageUrl, price, id, addItemToCart }) {
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
            onClick={() => addItemToCart({ name, imageUrl, price, id })}
         >
            add to cart
         </Button>
      </div>
   );
}

const mapDispatchToProps = dispatch => ({
   addItemToCart: payload => dispatch(addItemToCart(payload))
});

export default connect(
   null,
   mapDispatchToProps
)(Product);
