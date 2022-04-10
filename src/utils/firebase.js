import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC-I2foPUQToUv3LHY3KJfmMOC7QEtsnD4",
  authDomain: "chat-app-ef439.firebaseapp.com",
  databaseURL: "https://chat-app-ef439-default-rtdb.firebaseio.com/",
  projectId: "chat-app-ef439",
  storageBucket: "chat-app-ef439.appspot.com",
  messagingSenderId: "940514864523",
  appId: "1:940514864523:web:6b380cdc230ba20205138e",
  measurementId: "G-LDD91X80WN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);

export default firebaseConfig;
