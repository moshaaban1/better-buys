import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";

import { signInWithGoogle } from "../../firebase/firebase.auth";
import { emailSignInAsync } from "../../redux/user/user.actions";

import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import "./index.styles.scss";

const SignIn = ({ emailSignInAsync }) => {
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

   const handleSignInWithGoogle = () => {
      signInWithGoogle()
         .then(result => {
            console.log("Sign in successful");
         })
         .catch(error => {
            console.log(error);
         });
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
            <Button primary full onClick={handleSignInWithGoogle}>
               sign in with google
            </Button>
         </div>
      </Container>
   );
};

const mapDispatchToProps = dispatch => ({
   emailSignInAsync: payload => dispatch(emailSignInAsync(payload))
});

export default connect(
   null,
   mapDispatchToProps
)(SignIn);
