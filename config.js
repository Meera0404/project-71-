import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyAUV1CeXgKzs6zctVTQqYU9V48K3x9oels",
    authDomain: "project37-e37fb.firebaseapp.com",
    databaseURL: "https://project37-e37fb-default-rtdb.firebaseio.com",
    projectId: "project37-e37fb",
    storageBucket: "project37-e37fb.appspot.com",
    messagingSenderId: "471695499777",
    appId: "1:471695499777:web:c84a1db7454ec372bb9600" 
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

