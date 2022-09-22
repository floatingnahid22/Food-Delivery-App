import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBw9snO9xO2SpFSYYiP4y5JvcKfasXJ6tg",
  authDomain: "restaurantapp-d161f.firebaseapp.com",
  databaseURL: "https://restaurantapp-d161f-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-d161f",
  storageBucket: "restaurantapp-d161f.appspot.com",
  messagingSenderId: "468573504798",
  appId: "1:468573504798:web:cf38cda92cbff025c1350f",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
