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

// ref() -> reference to specific part of our DB
database.ref().set({
  name: 'Ram Levy',
  age: 24,
  isSingle: false,
  location: {
    city: 'Tel Aviv',
    country: 'Israel'
  }
});

// database.ref().set('My Data!');         //Wipes

database.ref('age').set(26); // update age only
database.ref('location/city').set('Beer Sheva');

database.ref('attributes/height').set('185');
database.ref('attributes/weight').set('84');

// console.log('I made a request to change the data');
