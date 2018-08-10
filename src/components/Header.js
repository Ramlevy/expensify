import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active"> Dashboard
    </NavLink> {/* "/" is in every link name, so we use exact property */}
    <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

// connect Header to store, undefined -> because no state is being used
export default connect(undefined, mapDispatchToProps)(Header)