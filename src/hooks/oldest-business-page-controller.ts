import { useEffect, useState } from 'react';

import { fetchOldestBusiness } from '../services/business';
import { Business } from '../services/business/types';

export const OldestBusinessReportPageController = () => {
  const [oldestBusiness, setOldestBusiness] = useState<Business>();

  useEffect(() => {
    fetchOldestBusiness().then(setOldestBusiness);
  }, []);

  return {
    oldestBusiness,
  };
};
