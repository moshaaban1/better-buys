import { db } from "./firebase.config";

// export const getCategories = async () => {
//    const collectionRef = db.collection("categories ");
//    const querySnapshot = await collectionRef.get();
//    const docs = querySnapshot.docs.map(doc => doc.data());
//    console.log(docs);
// };

const getCollections = () => {
   const collectionRef = db.collection("collections");
   return collectionRef.get();
};

export const convertCollectionsSnapshotToMap = async () => {
   const collectionsSnapshot = await getCollections();

   collectionsSnapshot.docs.map(docSnapshot => {
      const { title, items } = docSnapshot.data();

      return {
         id: docSnapshot.id,
         routeName: title.toLowerCase(),
         title,
         items
      };
   });
};

export const addCollectionAndDocuments = (collectionKey, objectToAdd) => {
   const collectionRef = db.collection(collectionKey);
   const batch = db.batch();

   objectToAdd.forEach(doc => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, doc);
   });

   batch.commit();
};
