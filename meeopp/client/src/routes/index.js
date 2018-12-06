import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProfileScreen from '../views/profileScreen/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProfileScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
