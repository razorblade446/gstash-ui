import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import { AuthLogin } from '@pages';

export const AuthRouter = () => {
  const { path, url } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${path}/login`} component={AuthLogin} />
        <Redirect to={`${url}`} />
      </Switch>
    </Router>
  );
};
