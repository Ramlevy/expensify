import * as firebase from 'firebase'; // grab all exports into firebase -> firebase.Method


// Initialize Firebase
const config = {
  apiKey: "AIzaSyC0OGIW06thSKOROAsLlUCe3y73U998npo",
  authDomain: "expensify-523c1.firebaseapp.com",
  databaseURL: "https://expensify-523c1.firebaseio.com",
  projectId: "expensify-523c1",
  storageBucket: "expensify-523c1.appspot.com",
  messagingSenderId: "519327295396"
};
firebase.initializeApp(config);

const database = firebase.database();

// ref(path) -> reference to the location in the DB. If no path provided, returns the root of DB
database.ref().set({
  name: 'Ram Levy',
  age: 24,
  isSingle: false,
  location: {
    city: 'Tel Aviv',
    country: 'Israel'
  }
}).then(() => {
  console.log("Data is saved");
}).catch((e) => {
  console.log("failed", e);
});

console.log('I made a request to change the data');


database.ref('attributes').set({
  height: 85,
  weight: 185
}).then(() => {
  console.log("att saved")
}).catch((e) => {
  console.log(e);
});

