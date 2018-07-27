import * as firebase from 'firebase'; // grab all exports into firebase -> firebase.Method

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }
















// // subscribe to changes and update the array of expenses
// database.ref().on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   })
//   console.log(expenses);
// });

// // child added
// database.ref().on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child removed
// database.ref().on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child changed
// database.ref().on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // Array-like push
// database.ref('expenses').push({
//   description: 'Moses',
//   amount: 45,
//   createdAt: 100
// })

// database.ref('expenses').push({
//   description: 'BBB',
//   amount: 52,
//   createdAt: 200
// })

// database.ref('expenses').push({
//   description: 'Anati',
//   amount: 20,
//   createdAt: 300
// }) 

// database.ref('expenses/-LIHGLo3Sbs2TdJp-oNo').remove();

// // ref(path) -> reference to the location in the DB. If no path provided, returns the root of DB
// database.ref().set({
//   name: 'Ram Levy',
//   age: 24,
//   stressLevel: 6,
//   isSingle: false,
//   location: {
//     city: 'Tel Aviv',
//     country: 'Israel'
//   },
//   job: 'Architect'
// }).then(() => {
//   console.log("Data is saved");
// }).catch((e) => {
//   console.log("failed", e);
// });

// // subscribe to changes with .on()
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job} at ${val.location.city}`);
// });


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

// // Fetch Data
// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   });
