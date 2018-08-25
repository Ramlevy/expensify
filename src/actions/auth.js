import { firebase, googleAuthProvider } from "../firebase/firebase";

// adds id to the store when user logins
export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogin = () => {
  return () => { // Async Function
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
};

export const startLogout = () => {
  return () => {
    console.log("AAA")
    return firebase.auth().signOut();
  };
};