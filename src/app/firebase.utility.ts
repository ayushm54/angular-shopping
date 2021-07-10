import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "DOMAIN",
  databaseURL: "DB_URL",
  projectId: "PROJETC_ID",
  storageBucket: "BUCKET",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "ID",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (
  authenticatedUser,
  additionalData
) => {
  if (!authenticatedUser) {
    return;
  }
  const userRef = firestore.doc(`users/${authenticatedUser.uid}`);
  const snapshot = await userRef.get();

  // storing user data if it dosent exists in our firestore
  if (!snapshot.exists) {
    const { displayName, email } = authenticatedUser;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("Error creating user", e.message);
    }
  }
  // returning the userref to the document we just saved on the firestore
  // this can be used to do further operations on the userdoc in other flows
  return userRef;
};

export const fetchCollection = async (collectionName = 'All') => {
  const collectionRef = firestore.collection('collections');
  let collectionData;
  if (collectionName != 'All') {
    const collection = await collectionRef.where('title', '==', collectionName);
    await collection.get().then((snapshot) => {
      collectionData = convertCollectionsSnapshotToMap(snapshot);
    });
  }else{
    await collectionRef.get().then((snapshot) => {
      collectionData = convertCollectionsSnapshotToMap(snapshot);
    });
  }
  return collectionData;
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // we would create a batch request to put all documents in firestore
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    // this would create a new document reference in firestore and randomly genereate a unique id for it
    const newDocRef = collectionRef.doc();
    // adding the newly created doc ref and the value associated with it to the batch
    batch.set(newDocRef, obj);
  });

  // firing the batch request
  // this returns a promise, which we can handle in the calling component
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    // encodeURI is a JS function whcih takes a string and convert it to valid uri
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // converting the transformedCollections array to a map object to store in the redux
  return transformedCollections.reduce((accumulatedValue, collection) => {
    accumulatedValue[collection.title] = collection;
    return accumulatedValue;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
