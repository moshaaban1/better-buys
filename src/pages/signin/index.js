import React, { Component } from "react";
import DefaultLayout from "../../layouts/default";
import { Container } from "@material-ui/core";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
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
   };

   render() {
      return (
         <DefaultLayout>
            <main className="page-content">
               <Container>
                  <div className="sign-in">
                     <h2 className="title">I already have an account</h2>
                     <span>Sign in with your email and password</span>
                     <form className="form" onSubmit={this.handleSubmit}>
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
                        <Button color="dark" size="md" width="100%">
                           {"Sign in".toUpperCase()}
                        </Button>
                        <Button color="primary" size="md" width="100%">
                           {"sign in with google".toUpperCase()}
                        </Button>
                     </form>
                  </div>
               </Container>
            </main>
         </DefaultLayout>
      );
   }
}
