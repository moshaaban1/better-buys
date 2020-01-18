import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.auth";
import { setCurrentUser } from "../../redux/user/user.actions";
import { selectUser } from "../../redux/user/user.reselect";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import NavIcon from "../navbar-icon/navbar-icon.component";
import {
   NavContainer,
   Container,
   NavLogo,
   NavList,
   NavLink
} from "./navbar.styles";

const Navbar = ({ user, setCurrentUser }) => {
   const signOut = () => {
      auth.signOut().then(function() {
         setCurrentUser(null);
      });
   };

   return (
      <NavContainer>
         <Container>
            <NavLogo to="/">
               <Logo />
            </NavLogo>

            <NavList>
               <NavLink to="/shop">Shop</NavLink>
               {user ? (
                  <NavLink as="div" to="" onClick={signOut}>
                     Sign out
                  </NavLink>
               ) : (
                  <>
                     <NavLink to="/signin">sign in</NavLink>
                     <NavLink to="/signup">sign up</NavLink>
                  </>
               )}
               <NavIcon />
            </NavList>
         </Container>
      </NavContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   user: selectUser
});

const mapDispatchToProps = dispatch => ({
   setCurrentUser: payload => dispatch(setCurrentUser(payload))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Navbar);
