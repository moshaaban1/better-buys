import styled, { css } from "styled-components";

const CartMenuContainerActiveStyle = css`
   visibility: visible;
   opacity: 1;
`;

const GlobalStyle = css`
   position: fixed;
   top: 0;
   bottom: 0;
   transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const CartMenuContainer = styled.div`
   background: rgba(0, 0, 0, 0.5);
   width: 100%;
   z-index: 9;
   opacity: 0;
   visibility: hidden;
   ${GlobalStyle};
   ${({ active }) => (active ? CartMenuContainerActiveStyle : null)}
`;

export const CartMenu = styled.div`
   background: #fff;
   padding: 20px;
   width: 280px;
   right: 0;
   ${GlobalStyle};
   transform: ${({ active }) =>
      active ? "translateX(0px)" : "translateX(280px)"};
`;

export const CartItems = styled.div`
   height: calc(100% - 50px);
   overflow-y: auto;
`;

export const CartEmpty = styled.div`
   font-size: 20px;
   text-transform: uppercase;
   display: flex;
   align-items: center;
   justify-content: center;
   height: calc(100% - 50px);
   overflow-y: auto;
`;
