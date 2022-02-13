import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSCTL6Dboo--uaY60qJwfGjkTHL4CL9t4",
  authDomain: "disney-plus-clone-b1171.firebaseapp.com",
  databaseURL: "https://disney-plus-clone-b1171-default-rtdb.firebaseio.com",
  projectId: "disney-plus-clone-b1171",
  storageBucket: "disney-plus-clone-b1171.appspot.com",
  messagingSenderId: "339561264960",
  appId: "1:339561264960:web:08a58a88ed3eedecc06ca5",
  measurementId: "G-LS7S34H60P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;