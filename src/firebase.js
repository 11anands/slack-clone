// Importing the Third Party Modules
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIcU5rsxJDLGVVkeaGBt5vxJ9UqZ9aOcc",
    authDomain: "slack-clone-317e8.firebaseapp.com",
    projectId: "slack-clone-317e8",
    storageBucket: "slack-clone-317e8.appspot.com",
    messagingSenderId: "785862830530",
    appId: "1:785862830530:web:622e29086d1569269e4e5b",
    measurementId: "G-3PPXVJ3T84"
};

// Intitialize all the database
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Exporting the database and default stuff
export { auth, provider };
export default db;