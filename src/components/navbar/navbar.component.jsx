import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Logo from "../../assets/images/logo.svg";
import "./navbar.style.scss";

export default function navbar() {
   const navbarLinks = [
      {
         href: "/shop",
         label: "shop"
      },
      {
         href: "/signUp",
         label: "sign up"
      },
      {
         href: "/signIn",
         label: "sign in"
      },
      {
         href: "/checkout",
         label: "cart"
      }
   ];
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
               {navbarLinks.map(link => (
                  <li key={link.label}>
                     {link.label === "cart" ? (
                        <Link to={link.href}>
                           <LocalMallIcon />
                        </Link>
                     ) : (
                        <Link to={link.href}>{link.label}</Link>
                     )}
                  </li>
               ))}
            </ul>
         </Container>
      </nav>
   );
}
