import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDWMxOOBTNAIZQA9uKxePDAbCqZ72yZcYk",
    authDomain: "electro-school-batumi.firebaseapp.com",
    projectId: "electro-school-batumi",
    storageBucket: "electro-school-batumi.appspot.com",
    messagingSenderId: "984839356653",
    appId: "1:984839356653:web:8e9619d6f3e5b1446a0ce4",
    measurementId: "G-Y8DVF07R7J"
})

const db = firebaseApp.firestore()

export default db;