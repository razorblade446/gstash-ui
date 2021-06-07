import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { DashboardRouter } from '@routes/DashboardRouter';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path='/auth' component={AuthRouter} />
          <Route path='/' component={DashboardRouter} />
        </Switch>
      </>
    </Router>
  );
};
