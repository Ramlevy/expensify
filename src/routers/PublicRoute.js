import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ( // ...rest = All other props that we didn't destructure specifically
  { isAuthenticated, component: Component, ...rest }) => ( // component renamed to Component  (prop passed in AppRouter.js)
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
          <Component {...props} />
        )
    )}
    />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);