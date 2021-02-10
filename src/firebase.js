import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVMQISZeBlztAIHhBzF8VdQvv5xU1hwpM",
  authDomain: "netlifix-app.firebaseapp.com",
  projectId: "netlifix-app",
  storageBucket: "netlifix-app.appspot.com",
  messagingSenderId: "571013281743",
  appId: "1:571013281743:web:380c8ed785345ceb9e44ba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
