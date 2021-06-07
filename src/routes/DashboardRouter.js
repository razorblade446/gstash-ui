import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import { DashboardNavigation } from '@components/DashboardNavigation';
import { DashboardGames, DashboardHome, DashboardPlatforms } from '@pages';

export const DashboardRouter = () => {
  const { path, url } = useRouteMatch();

  return (
    <Router>
      <>
        <DashboardNavigation />

        <Switch>
          <Route path={`${path}games`} component={DashboardGames} />
          <Route path={`${path}platforms`} component={DashboardPlatforms} />
          <Route exact path={path} component={DashboardHome} />
          <Redirect to={`${url}`} />
        </Switch>
      </>
    </Router>
  );
};
