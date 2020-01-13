import styled, { css } from "styled-components";

const textTransform = ({ textTransform }) => {
   switch (textTransform) {
      case "lowercase":
         return "lowercase";
      case "capitalize":
         return "capitalize";
      default:
         return "uppercase";
   }
};

const ButtonLarge = css`
   padding: "20px 35px";
`;

const ButtonInverted = css`
   background: #000;
   color: #fff;
   border: 1px solid #000;

   &:hover {
      color: #000;
      background: transparent;
   }
`;

const ButtonPrimary = css`
   background: #3f51b5;
   color: #fff;
   border: 1px solid transparent;

   &:hover {
      border: 1px solid #000;
      color: #000;
      background: transparent;
   }
`;

const getButtonStyles = props => {
   if (props.inverted) {
      return ButtonInverted;
   }
   if (props.primary) {
      return ButtonPrimary;
   }
   return;
};

export const CustomButton = styled.button`
   border: none;
   cursor: pointer;
   outline: none;
   background: #ddd;
   color: #000;
   margin-bottom: 10px;
   text-transform: ${textTransform};
   padding: 15px 20px;
   width: ${props => (props.full ? "100%" : "auto")};
   ${props => getButtonStyles(props)};
`;
