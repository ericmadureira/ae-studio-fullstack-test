import React from 'react';

import { MostLocationsBusinessReportPageController } from '../../../hooks/most-locations-business-page-controller';

const MostLocationsBusinessReportPage = () => {
  const { mostLocationsBusiness } = MostLocationsBusinessReportPageController();
  console.log('MOST LOCATIONS BUSINESS: ', mostLocationsBusiness);

  return (
    <>
      <h1>Most Locations Business Report</h1>
      <h2>{JSON.stringify(mostLocationsBusiness)}</h2>
    </>
  );
};

export default MostLocationsBusinessReportPage;
