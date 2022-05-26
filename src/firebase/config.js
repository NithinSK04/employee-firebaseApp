// import {getFirestore, collection, getDocs} from 'firebase/firestore';
// import 'firebase/firestore';
// import '@firebase/firestore';
// import * as firebase from 'firebase/app';
// import '@firebase/auth';
// import '@firebase/firestore';
// import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//generated from  "add web view"
const firebaseConfig = {
  apiKey: 'AIzaSyBKrr6snFk_6aCbqkswPEpjIpbHYoZOgRA',
  authDomain: 'employeeapp-fb.firebaseapp.com',
  databaseURL: 'https://employeeapp-fb-default-rtdb.firebaseio.com',
  projectId: 'employeeapp-fb',
  storageBucket: 'employeeapp-fb.appspot.com',
  messagingSenderId: '1003079153135',
  appId: '1:1003079153135:web:7c0bbab7e59a330e7af21a',
  measurementId: 'G-MGJLH8RLRY',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const app = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);

export {firebase};
