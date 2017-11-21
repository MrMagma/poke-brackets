import firebase from "firebase";
import cfg from "../../firebase.json";

firebase.initializeApp(cfg);

export default firebase.database();
