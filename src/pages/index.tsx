import React, { useEffect, useState } from 'react';

import { getOldestBusiness } from '../services/business';
import { Business } from '../services/business/types';

const HomePage = () => {
  const [oldestBusiness, setOldestBusiness] = useState({});

  useEffect(() => {
    getOldestBusiness().then(setOldestBusiness);

  }, [getOldestBusiness]);

  console.log('OLDEST BUSINESS: ', oldestBusiness);

  return (
    <h1>Home page</h1>
  );
};

export default HomePage;
