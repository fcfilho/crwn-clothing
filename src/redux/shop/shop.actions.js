import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertColectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSucccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    // Promise
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertColectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSucccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
