import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { auth } from "../../firebase/firebase.utils";
import Logo from "../../assets/images/logo.svg";
import "./navbar.style.scss";

export default function navbar({ user }) {
   const signOut = () => {
      auth
         .signOut()
         .then(function() {
            console.log("Sign-out successful.");
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
               {user ? (
                  <li>
                     <Link onClick={signOut} to="">
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
