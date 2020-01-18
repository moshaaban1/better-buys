import { firestore } from "./firebase.config";

export const convertCollectionsSnapshotToMap = snapshot => {
   const docs = snapshot.docs.map(docSnapshot => {
      const { title, items } = docSnapshot.data();

      return {
         id: docSnapshot.id,
         routeName: title.toLowerCase(),
         title,
         items
      };
   });

   return docs.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
   }, {});
};

export const addCollectionAndDocuments = (collectionKey, objectToAdd) => {
   const collectionRef = firestore.collection(collectionKey);
   const batch = firestore.batch();

   objectToAdd.forEach(doc => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, doc);
   });

   batch.commit();
};
