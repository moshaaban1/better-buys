import styled, { css } from "styled-components";

const shrinkLabel = css`
   top: -14px;
   font-size: 12px;
   color: black;
`;

export const InputGroup = styled.div`
   position: relative;
   margin: 45px 0;
`;

export const Input = styled.input`
   background: none;
   color: grey;
   font-size: 18px;
   padding: 15px 10px 10px 10px;
   display: block;
   width: 100%;
   border: none;
   border-radius: 0;
   border-bottom: 1px solid grey;
   margin: 25px 0;
   outline: none;

   &:[type='password'] {
      letter-spacing: 0.3em;
   }

   &:focus ~ label {
      ${shrinkLabel}
   }
`;

export const InputLabel = styled.label`
   color: grey;
   font-size: 16px;
   font-weight: normal;
   position: absolute;
   pointer-events: none;
   left: 5px;
   top: 10px;
   transition: 300ms ease all;
   ${({ shrink }) => (shrink ? shrinkLabel : null)}
`;
