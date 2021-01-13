import React from 'react';

import { OldestBusinessReportPageController } from '../../../hooks/oldest-business-page-controller';

const OldestBusinessReportPage = () => {
  const { oldestBusiness } = OldestBusinessReportPageController();
  console.log('OLDEST BUSINESS: ', oldestBusiness);

  return (
    <>
      <h1>Oldest Business Report</h1>
      <h2>{JSON.stringify(oldestBusiness)}</h2>
    </>
  );
};

export default OldestBusinessReportPage;
