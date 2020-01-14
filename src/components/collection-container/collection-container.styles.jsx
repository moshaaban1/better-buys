import styled from "styled-components";

export const CollectionContainer = styled.div`
   padding-bottom: 30px;
   &:last-child {
      padding: 0;
   }
`;

export const CollectionTitle = styled.h2`
   margin-bottom: 25px;
   font-size: 22px;
   margin-top: 0;
`;

export const CollectionItems = styled.div`
   display: grid;
   grid-gap: 15px;
   grid-template-columns: 1fr 1fr 1fr 1fr;
`;
