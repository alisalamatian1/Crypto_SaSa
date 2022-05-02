import * as firebase from "firebase"
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
// import { config } from "./firebaseAPI";

const firebaseConfig = { 
    apiKey: "AIzaSyDLXsjao3g3wPMWWT2iG4jKzdmamim0mmI",
    authDomain: "crypto-sasa.firebaseapp.com",
    projectId: "crypto-sasa",
    storageBucket: "crypto-sasa.appspot.com",
    messagingSenderId: "268019230126",
    appId: "1:268019230126:web:2a5aefd02c82a5dc28143f"
  };
  

let app;
let db;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
    db = firebase.firestore ();
    db.settings({timestampsInSnapshots : true})
}else{
    app = firebase.app()
}


export {db}
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;