import { db } from "./firebase.config";

export const getCategories = db
   .collection("categories ")
   .get()
   .then(querySnapshot => {
      querySnapshot.forEach(doc => {
         console.log(doc.id, doc.data());
      });
   })
   .catch(error => {
      console.log(error);
   });
