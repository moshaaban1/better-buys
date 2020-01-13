import styled from "styled-components";

import { Container as MaterialContainer } from "@material-ui/core";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
   background: #000;
   color: #fff;
`;

export const Container = styled(MaterialContainer)`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   justify-content: space-between;
`;

export const NavLogo = styled(Link)``;

export const NavList = styled.div`
   display: flex;
   padding: 15px 0;
   align-items: center;
`;

export const NavLink = styled(Link)`
   font-size: 16px;
   color: #fff;
   padding: 10px 15px;
   margin: 0 2px;
   display: inline-block;
   text-decoration: none;
   text-transform: uppercase;
   transition: all 0.5s ease-in-out;
   cursor: pointer;
   background: ${({ active }) => (active ? "#fff" : "transparent")};
   color: ${({ active }) => (active ? "#000" : "#fff")};

   &:hover,
   &.selected {
      background: #fff;
      color: #000;
   }
`;
