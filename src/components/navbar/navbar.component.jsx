import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
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
                  <Link to="/shop">Shop</Link>
               </li>
               {props.user ? (
                  <li>
                     <Link onClick={signOut} to="/signIn">
                        Sign out
                     </Link>
                  </li>
               ) : (
                  <>
                     <li>
                        <Link to="/signin">sign in</Link>
                     </li>
                     <li>
                        <Link to="/signup">sign up</Link>
                     </li>
                  </>
               )}
               <li>
                  <Link to="/checkout">
                     <LocalMallIcon />
                  </Link>
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
