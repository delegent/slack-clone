import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBkwD2HI67y2qkHnlz2ZkJrcloBFcFeRGo",
  authDomain: "slack-clone-ee177.firebaseapp.com",
  projectId: "slack-clone-ee177",
  storageBucket: "slack-clone-ee177.appspot.com",
  messagingSenderId: "86973851482",
  appId: "1:86973851482:web:e6466e2da84c2d3d61b563"
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;





