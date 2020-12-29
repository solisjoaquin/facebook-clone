import Firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4Jv6HTHFOVWr7G3ZjfjocfrQAB4zuJ38",
    authDomain: "facebook-clone-20125.firebaseapp.com",
    projectId: "facebook-clone-20125",
    storageBucket: "facebook-clone-20125.appspot.com",
    messagingSenderId: "428357349007",
    appId: "1:428357349007:web:a6979ecfd26631e3844afa",
    measurementId: "G-183ED3YF04"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;