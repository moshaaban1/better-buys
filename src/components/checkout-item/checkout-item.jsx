import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid rgba(0, 0, 0, 0.6);
   padding: 15px 0;
   font-size: 20px;
   color: #000;
`;

export const ItemImg = styled.img`
   width: 110px;
`;

export const ItemName = styled.span`
   width: 25%;
`;

export const ItemControl = styled.div`
   display: flex;
   align-items: center;
`;

export const ItemQuantity = styled.span`
   padding: 0 10px;
`;
