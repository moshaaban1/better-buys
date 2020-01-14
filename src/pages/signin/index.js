import React, { Component } from "react";
import { Container } from "@material-ui/core";

import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import "./index.styles.scss";
export default class SignIn extends Component {
   state = {
      email: "",
      password: ""
   };

   handleChange = e => {
      var { value, name } = e.target;
      this.setState({ [name]: value });
   };

   handleSubmit = e => {
      e.preventDefault();
      auth
         .signInWithEmailAndPassword(this.state.email, this.state.password)
         .then(res => {
            console.log("Sign in successful");
         })
         .catch(error => {
            console.log(error);
         });
   };

   signInWithGoogle = () => {
      signInWithGoogle()
         .then(result => {
            console.log("Sign in successful");
         })
         .catch(error => {
            console.log(error);
         });
   };

   render() {
      return (
         <Container>
            <div className="sign-in">
               <h2 className="title">I already have an account</h2>
               <span>Sign in with your email and password</span>
               <form className="form" onSubmit={this.handleSubmit}>
                  <FormInput
                     type="email"
                     name="email"
                     value={this.state.email}
                     onChange={this.handleChange}
                     label="Email"
                     required
                  />
                  <FormInput
                     type="password"
                     name="password"
                     value={this.state.password}
                     onChange={this.handleChange}
                     label="Password"
                     required
                  />
                  <Button inverted full>
                     sign in
                  </Button>
               </form>
               <Button primary full onClick={signInWithGoogle}>
                  sign in with google
               </Button>
            </div>
         </Container>
      );
   }
}
