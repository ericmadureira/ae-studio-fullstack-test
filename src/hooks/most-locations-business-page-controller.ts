import { useEffect, useState } from 'react';

import { fetchMostLocationsBusiness } from '../services/business';
import { Business } from '../services/business/types';

export const MostLocationsBusinessReportPageController = () => {
  const [mostLocationsBusiness, setMostLocationsBusiness] = useState<Business[]>();

  useEffect(() => {
    fetchMostLocationsBusiness().then(setMostLocationsBusiness);
  }, [fetchMostLocationsBusiness]);

  return {
    mostLocationsBusiness,
  };
};
