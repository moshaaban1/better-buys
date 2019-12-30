import React, { Component } from "react";
import DefaultLayout from "../../layouts/default";
import { Container } from "@material-ui/core";
import Button from "../../components/button/button.component";
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
                  <div className="sing-in">
                     <h2>I already have an account</h2>
                     <span>Sign in with your email and password</span>
                     <form className="form" onSubmit={this.handleSubmit}>
                        <input
                           type="email"
                           name="email"
                           value={this.state.email}
                           onChange={this.handleChange}
                           required
                        />
                        <input
                           type="password"
                           name="password"
                           value={this.state.password}
                           onChange={this.handleChange}
                           required
                        />
                        <Button color="dark" size="md">
                           {"Sign in".toUpperCase()}
                        </Button>
                        <Button color="primary" size="md">
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
