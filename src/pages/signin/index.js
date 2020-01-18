import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";

import {
   emailSignInAsync,
   signInWithGoogleAsync
} from "../../redux/user/user.actions";

import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import "./index.styles.scss";

const SignIn = ({ emailSignInAsync, signInWithGoogle }) => {
   const [inputValues, setInputValues] = useState({
      email: "",
      password: ""
   });

   const handleChange = e => {
      var { value, name } = e.target;
      setInputValues({ ...inputValues, [name]: value });
   };

   const handleSubmit = e => {
      e.preventDefault();
      emailSignInAsync(inputValues);
   };

   return (
      <Container>
         <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form className="form" onSubmit={handleSubmit}>
               <FormInput
                  type="email"
                  name="email"
                  value={inputValues.email}
                  onChange={handleChange}
                  label="Email"
                  required
               />
               <FormInput
                  type="password"
                  name="password"
                  value={inputValues.password}
                  onChange={handleChange}
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
};

const mapDispatchToProps = dispatch => ({
   emailSignInAsync: payload => dispatch(emailSignInAsync(payload)),
   signInWithGoogle: () => dispatch(signInWithGoogleAsync())
});

export default connect(
   null,
   mapDispatchToProps
)(SignIn);
