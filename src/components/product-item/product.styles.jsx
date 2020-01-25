import styled from "styled-components";

export const ProductContainer = styled.div``;

export const ProductImg = styled.img`
   width: 100%;
   height: 350px;
   object-fit: cover;

   @media screen and (max-width: 700px) {
      height: 300px;
   }
`;

export const ProductDetails = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 16px;
   font-weight: bold;
   padding: 6px 0 10px 0;
`;
