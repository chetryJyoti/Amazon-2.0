import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8XAhrAGbSeFCVoDHi3g7Z4lu6kFI5ykI",
  authDomain: "clone-34517.firebaseapp.com",
  projectId: "clone-34517",
  storageBucket: "clone-34517.appspot.com",
  messagingSenderId: "75283919345",
  appId: "1:75283919345:web:57d08e6997728efde69450",
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};