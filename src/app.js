import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase.js';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true;
  }
};


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

// runs on Authenticated to unAuthenticated or the opposite
firebase.auth().onAuthStateChanged((user) => {
  if (user) { // Login
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else { // Logout
    renderApp();
    history.push('/');
  }
});

