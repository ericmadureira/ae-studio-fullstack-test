import React from 'react';
import { Link } from 'react-router-dom';

import { oldestBusinessReportPageController } from '../../../hooks/oldest-business-page-controller';

const OldestBusinessReportPage = () => {
  const { oldestBusiness } = oldestBusinessReportPageController();
  console.log('OLDEST BUSINESS: ', oldestBusiness);

  return (
    <>
      <h1>Oldest Business Report</h1>
      <Link to='/'>Back to Home</Link>
      <h2>{oldestBusiness}</h2>
    </>
  );
};

export default OldestBusinessReportPage;
