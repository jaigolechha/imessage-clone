import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAOVRDOQ3KEmx2Yc5hmBPirNT_-dXc_k30",
  authDomain: "dbms-project-a3555.firebaseapp.com",
  projectId: "dbms-project-a3555",
  storageBucket: "dbms-project-a3555.appspot.com",
  messagingSenderId: "931307599145",
  appId: "1:931307599145:web:9701aefa183327c208b338",
  measurementId: "G-6NW4E6ZN4E"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;