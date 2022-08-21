import * as firebase from "firebase"
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
// config represents all the api set up for firebase
import { config } from "./firebaseAPI";

let app;
let db;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(config)
    db = firebase.firestore ();
    db.settings({timestampsInSnapshots : true})
}else{
    app = firebase.app()
}


export {db}
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
