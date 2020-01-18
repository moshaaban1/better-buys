import React, { useState } from "react";
import { Container } from "@material-ui/core";

import { auth, createUserProfile } from "../../firebase/firebase.auth";

import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";

const SignUp = () => {
   const [inputValues, setInputValues] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
   });

   const handleChange = e => {
      var { value, name } = e.target;
      setInputValues({ ...inputValues, [name]: value });
   };

   const handleSubmit = async e => {
      e.preventDefault();

      const { name, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
         console.log("Password doesn't match");
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

   return (
      <Container>
         <div className="sign-in">
            <h2 className="title">I don't have an account</h2>
            <span>Register a new account</span>
            <form className="form" onSubmit={handleSubmit}>
               <FormInput
                  type="text"
                  name="name"
                  value={inputValues.name}
                  onChange={handleChange}
                  label="Name"
                  required
               />
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
               <FormInput
                  type="password"
                  name="confirmPassword"
                  value={inputValues.confirmPassword}
                  onChange={handleChange}
                  label="Confirm Password"
                  required
               />
               <Button inverted full>
                  Sign Up
               </Button>
            </form>
         </div>
      </Container>
   );
};

export default SignUp;
