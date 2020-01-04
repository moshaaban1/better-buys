import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";
export default class SignUp extends Component {
   state = {
      name: "ahmed",
      email: "@gmail.com",
      password: "123456",
      confirmPassword: "123456"
   };

   handleChange = e => {
      var { value, name } = e.target;
      this.setState({ [name]: value });
   };

   handleSubmit = async e => {
      e.preventDefault();

      const { name, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
         console.log("Password don't match");
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
         );

         Object.defineProperties(user, {
            displayName: {
               value: name,
               writable: true
            }
         });

         createUserProfile(user);
      } catch (error) {
         console.error(error);
      }
   };

   render() {
      return (
         <main className="page-content">
            <Container>
               <div className="sign-in">
                  <h2 className="title">I don't have an account</h2>
                  <span>Register a new account</span>
                  <form className="form" onSubmit={this.handleSubmit}>
                     <FormInput
                        type="text"
                        name="name"
                        value={this.state.name}
                        handleChange={this.handleChange}
                        label="Name"
                        required
                     />
                     <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                     />
                     <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                     />
                     <FormInput
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                     />
                     <Button color="dark" size="md" width="100%">
                        {"Sign Up".toUpperCase()}
                     </Button>
                  </form>
               </div>
            </Container>
         </main>
      );
   }
}
