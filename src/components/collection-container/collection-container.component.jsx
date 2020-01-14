import React from "react";

import Product from "../product-item/product.component";
import {
   CollectionContainer,
   CollectionTitle,
   CollectionItems
} from "./collection-container.styles";

const Collection = ({ title, items }) => {
   return (
      <CollectionContainer>
         <CollectionTitle>{title}</CollectionTitle>
         <CollectionItems>
            {items.map(product => (
               <Product {...product} key={product.name} />
            ))}
         </CollectionItems>
      </CollectionContainer>
   );
};

export default Collection;
