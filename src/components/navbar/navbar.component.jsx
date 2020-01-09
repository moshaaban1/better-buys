import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Container } from "@material-ui/core";

import { auth } from "../../firebase/firebase.utils";

import { setCurrentUser } from "../../redux/user/user.actions";
import { selectUser } from "../../redux/user/user.reselect";

import NavbarIcon from "../navbar-icon/navbar-icon.component";
import Logo from "../../assets/images/logo.svg";

import "./navbar.style.scss";

function Navbar({ user, setCurrentUser }) {
   const signOut = () => {
      auth
         .signOut()
         .then(function() {
            setCurrentUser(null);
         })
         .catch(function(error) {
            console.log("An error happened.");
         });
   };

   return (
      <nav className="navbar">
         <Container
            className="container"
            style={{
               display: "flex",
               alignItems: "center",
               flexWrap: "wrap",
               justifyContent: "space-between"
            }}
         >
            <Link to="/" className="navbar__logo">
               <img src={Logo} alt="navbar logo" />
            </Link>

            <ul className="navbar__links">
               <li>
                  <NavLink to="/shop" activeClassName="selected">
                     Shop
                  </NavLink>
               </li>
               {user ? (
                  <li>
                     <NavLink onClick={signOut} to="/signIn">
                        Sign out
                     </NavLink>
                  </li>
               ) : (
                  <>
                     <li>
                        <NavLink to="/signin" activeClassName="selected">
                           sign in
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="/signup" activeClassName="selected">
                           sign up
                        </NavLink>
                     </li>
                  </>
               )}
               <NavbarIcon />
            </ul>
         </Container>
      </nav>
   );
}

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
