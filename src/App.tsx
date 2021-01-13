import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/home';
import OldestBusinessReportPage from './pages/business/oldest-business-report';
import MostLocationBusinessReportPage from './pages/business/most-locations-business-report';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {/* BUSINESS ROUTES */}
          <Route path='/business/most-locations-business-report'>
            <MostLocationBusinessReportPage />
          </Route>
          <Route path='/business/oldest-business-report'>
            <OldestBusinessReportPage />
          </Route>
          {/* HOME ROUTE */}
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
