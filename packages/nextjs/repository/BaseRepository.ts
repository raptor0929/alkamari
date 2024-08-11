// Initialize Firestore through Firebase
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB1AcxJSd_YrsgDLr9HAKaAm9CY3km2sAc",
  projectId: "p2pcryptobo-9c76f",
});

let fireStoreDB: Firestore | undefined;
export const GetDatabaseConnection = () => {
  if (!fireStoreDB) fireStoreDB = getFirestore(firebaseApp);
  return fireStoreDB;
};
