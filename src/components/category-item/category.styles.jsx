import styled from "styled-components";

export const BoxOverFlowHidden = styled.div`
   overflow: hidden;
`;

export const CategoryContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background-size: cover;
   background-repeat: no-repeat;
   height: 100%;

   &:hover {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      cursor: pointer;

      > div {
         opacity: 0.8;
      }
   }
`;

export const CategoryContent = styled.div`
   text-align: center;
   color: #000;
   background: #fff;
   opacity: 0.7;
   // background: rgba(255, 255, 255, .7);
   padding: 15px;
`;

export const CategoryTitle = styled.div`
   margin-top: 0;
   font-size: 20px;
   font-weight: bold;
   margin-bottom: 10px;
`;
