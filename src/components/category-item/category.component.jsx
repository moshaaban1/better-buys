import React from "react";
import { useHistory } from "react-router-dom";

import {
   BoxOverFlowHidden,
   CategoryContainer,
   CategoryContent,
   CategoryTitle
} from "./category.styles";

export default function Category({ imageUrl, title, linkUrl }) {
   let history = useHistory();
   return (
      <BoxOverFlowHidden onClick={() => history.push(linkUrl)}>
         <CategoryContainer style={{ backgroundImage: `url(${imageUrl})` }}>
            <CategoryContent>
               <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
               <span>SHOP NOW</span>
            </CategoryContent>
         </CategoryContainer>
      </BoxOverFlowHidden>
   );
}
