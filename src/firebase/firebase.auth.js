import firebase, { firestore } from "./firebase.config";

export const auth = firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
   prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`/users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (error) {
         console.log("Error creating user", error.message);
      }
   }

   return userRef;
};
