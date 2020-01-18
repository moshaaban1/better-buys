import types from "./user.types";

import { auth, signInWithGoogle } from "../../firebase/firebase.auth";

const emailSignInStart = () => ({
   type: types.EMAIL_SIGN_IN_START
});

const emailSignInSuccess = () => ({
   type: types.EMAIL_SIGN_IN_SUCCESS
});

const emailSignInFailure = payload => ({
   type: types.EMAIL_SIGN_IN_FAILURE,
   payload
});

export const setCurrentUser = payload => ({
   type: types.SET_CURRENT_USER,
   payload
});

export const emailSignInAsync = inputValues => dispatch => {
   dispatch(emailSignInStart());
   const { email, password } = inputValues;
   auth
      .signInWithEmailAndPassword(email, password)
      .then(success => {
         dispatch(emailSignInSuccess());
      })
      .catch(error => {
         dispatch(emailSignInFailure(error.message));
      });
};

export const signInWithGoogleAsync = () => dispatch => {
   dispatch(emailSignInStart());
   signInWithGoogle()
      .then(success => {
         dispatch(emailSignInSuccess());
      })
      .catch(error => {
         dispatch(emailSignInFailure(error.message));
      });
};
