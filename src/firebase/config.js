import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBQjh-ndyNCZx_100Vj843hNlmchsoly2I",
    authDomain: "mymoney-e39f3.firebaseapp.com",
    projectId: "mymoney-e39f3",
    storageBucket: "mymoney-e39f3.appspot.com",
    messagingSenderId: "701224553301",
    appId: "1:701224553301:web:d03b360a6ad7215b917ddc"
};

// init
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestone = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestone, projectAuth }



