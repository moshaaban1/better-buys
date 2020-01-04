import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyA3n2Ukn_TOL70gO1h9Byackjbln03XG-E",
   authDomain: "ecommerce-6f15c.firebaseapp.com",
   databaseURL: "https://ecommerce-6f15c.firebaseio.com",
   projectId: "ecommerce-6f15c",
   storageBucket: "ecommerce-6f15c.appspot.com",
   messagingSenderId: "971777311808",
   appId: "1:971777311808:web:44e52c65c980ff6f548ba5",
   measurementId: "G-CL6QVDC1EX"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
   prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const db = firebase.firestore();

export const createUserProfile = async userAuth => {
   if (!userAuth) return;

   const userProfile = {
      name: userAuth.displayName || null,
      email: userAuth.email || null,
      phoneNumber: userAuth.phoneNumber || null,
      createdAt: new Date()
   };

   const userRef = db.doc(`/users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      try {
         await userRef.set(userProfile);
      } catch (error) {
         console.log("Error creating user", error.message);
      }
   }

   return userRef;
};
