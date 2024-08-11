// Initialize Firestore through Firebase
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBFKIM2oGPv0nAOFyqm-55BWKC-RWpCzdY",
  projectId: "test123-1d80d",
});

let fireStoreDB: Firestore | undefined;
export const GetDatabaseConnection = () => {
  if (!fireStoreDB) fireStoreDB = getFirestore(firebaseApp);
  return fireStoreDB;
};
