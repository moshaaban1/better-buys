import types from "./shop.types";

import { firestore } from "../../firebase/firebase.config";
import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
   type: types.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = payload => ({
   type: types.FETCH_COLLECTIONS_SUCCESS,
   payload
});

export const fetchCollectionsFailure = payload => ({
   type: types.FETCH_COLLECTIONS_FAILURE,
   payload
});

// Async Action Creator
export function fetchCollectionsStartAsync() {
   return dispatch => {
      const collectionRef = firestore.collection("collections");
      dispatch(fetchCollectionsStart());

      collectionRef
         .get()
         .then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
         })
         .catch(error => {
            dispatch(fetchCollectionsFailure(error.message));
         });
   };
}
