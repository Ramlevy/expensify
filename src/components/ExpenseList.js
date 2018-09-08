import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Component
const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      {props.expenses.length === 0 && <p>No expenses</p>}
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })}
    </div>
  );
};

// Store's state to component's props
// Connect the component to the Redux Store. On change theres re-rendering.
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);