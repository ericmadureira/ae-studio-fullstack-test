import React from 'react';
import { Link } from 'react-router-dom';

import { mostLocationsBusinessesReportPageController } from '../../../hooks/most-locations-businesses-page-controller';

const MostLocationsBusinessesReportPage = () => {
  const { mostLocationsBusinesses } = mostLocationsBusinessesReportPageController();
  console.log('MOST LOCATIONS BUSINESSES: ', mostLocationsBusinesses);

  return (
    <>
      <h1>Most Locations Businesses Report</h1>
      <Link to='/'>Back to Home</Link>
      <h2>{mostLocationsBusinesses}</h2>
    </>
  );
};

export default MostLocationsBusinessesReportPage;
