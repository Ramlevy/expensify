import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}> Dashboard
    </NavLink> {/* "/" is in every link name, so we use exact property */}
    <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
  </header>
);

export default Header;