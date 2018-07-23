import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase.js';
// import './playground/promises.js';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 6000 }))
store.dispatch(addExpense({ description: 'Moses', amount: 4500 }))
store.dispatch(addExpense({ description: 'Rent', amount: 110000 }))
//  store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store = { store }>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))

