import styled from "styled-components";

import { ReactComponent as ShoppingBag } from "../../assets/images/shopping-bag.svg";

export const NavbarIconContainer = styled.div`
   position: relative;
   cursor: pointer;
   margin-left: 15px;
`;

export const ShoppingIcon = styled(ShoppingBag)`
   width: 40px;
`;

export const NavbarCartCount = styled.span`
   position: absolute;
   width: 100%;
   text-align: center;
   top: 15px;
`;
