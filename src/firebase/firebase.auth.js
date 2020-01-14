import firebase, { db } from "./firebase.config";

export const auth = firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
   prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

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
