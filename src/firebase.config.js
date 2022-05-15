import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5su1ombFlVKPmcRy1C9FbNsSxaxmgwac",
  authDomain: "food-delivery-app-1d757.firebaseapp.com",
  databaseURL: "https://food-delivery-app-1d757-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-1d757",
  storageBucket: "food-delivery-app-1d757.appspot.com",
  messagingSenderId: "43851616823",
  appId: "1:43851616823:web:67f7cef404a7cdcccea5b2"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
