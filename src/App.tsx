import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages';
import OldestBusinessReportPage from './pages/business/oldest-business-report';
import MostLocationBusinessesReportPage from './pages/business/most-locations-businesses-report';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          {/* BUSINESS ROUTES */}
          <Route path='/business/most-locations-businesses-report'>
            <MostLocationBusinessesReportPage />
          </Route>
          <Route path='/business/oldest-business-report'>
            <OldestBusinessReportPage />
          </Route>
          {/* HOME ROUTE */}
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
