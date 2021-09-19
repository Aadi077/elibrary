import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
apiKey: "AIzaSyBoQJcqMbBD9EPkoluMw-FJKyoQie3T7l0",
  authDomain: "elibrary-337f1.firebaseapp.com",
  databaseURL: "https://elibrary-337f1-default-rtdb.firebaseio.com",
  projectId: "elibrary-337f1",
  storageBucket: "elibrary-337f1.appspot.com",
  messagingSenderId: "421075447406",
  appId: "1:421075447406:web:84263a66c69378279fc07f"
};

  let app = firebase.initializeApp(firebaseConfig);

  export default app.database()
