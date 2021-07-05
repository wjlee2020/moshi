const config = {
    apiKey: "AIzaSyDA62aLldlfa_lrR-itOkZbE4Nl-34ktho",
    authDomain: "moshi-7e991.firebaseapp.com",
    databaseURL: "https://moshi-7e991-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "moshi-7e991",
    storageBucket: "moshi-7e991.appspot.com",
    messagingSenderId: "1061578372974",
    appId: "1:1061578372974:web:38995a8572d0bad920b37f"
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore();

export { firebase, FieldValue };