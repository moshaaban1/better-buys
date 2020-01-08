import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleDrawer } from "../../redux/cart/cart.actions";
import { auth } from "../../firebase/firebase.utils";

import { Container } from "@material-ui/core";
import ShoppingBag from "../../assets/images/shopping-bag.svg";
import Logo from "../../assets/images/logo.svg";
import "./navbar.style.scss";

function Navbar(props) {
   const signOut = () => {
      auth
         .signOut()
         .then(function() {
            console.log("Sign-out successful.");
            props.dispatch({
               type: "SET_USER",
               payload: null
            });
         })
         .catch(function(error) {
            console.log("An error happened.");
         });
   };

   const handleToggleDrawer = () => {
      props.dispatch(toggleDrawer());
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
               {props.user ? (
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
               <li onClick={handleToggleDrawer}>
                  Cart
                  <img src={ShoppingBag} alt="navbar shopping bag" />
               </li>
            </ul>
         </Container>
      </nav>
   );
}

const mapStateToProps = state => ({
   user: state.user.user
});

export default connect(mapStateToProps)(Navbar);
