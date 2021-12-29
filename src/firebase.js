import * as firebase from "firebase"
//import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLXsjao3g3wPMWWT2iG4jKzdmamim0mmI",
  authDomain: "crypto-sasa.firebaseapp.com",
  projectId: "crypto-sasa",
  storageBucket: "crypto-sasa.appspot.com",
  messagingSenderId: "268019230126",
  appId: "1:268019230126:web:2a5aefd02c82a5dc28143f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}

const auth = firebase.auth()
export {auth}