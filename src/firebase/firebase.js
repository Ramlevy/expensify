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
  stressLevel: 6,
  isSingle: false,
  location: {
    city: 'Tel Aviv',
    country: 'Israel'
  },
  job: 'Architect'
}).then(() => {
  console.log("Data is saved");
}).catch((e) => {
  console.log("failed", e);
});

// subscribe to changes with .on()
database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job} at ${val.location.city}`);
});


// // Create Data
// database.ref('attributes').set({
//   height: 85,
//   weight: 185
// }).then(() => {
//   console.log("Data Created")
// }).catch((e) => {
//   console.log(e);
// });

// // Remove Data
// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Data was removed')
//   })

// // Remove Data #2
// database.ref('age').set(null);

// // Update Data
// database.ref().update({
//   age: 33,  // Update Data
//   job: 'Software developer', // New Data
//   isSingle: null, // Remove Data
//   'location/city': 'New York'
// })

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   });
