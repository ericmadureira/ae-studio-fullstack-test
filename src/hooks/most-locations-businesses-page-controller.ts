import { useEffect, useState } from 'react';

import { fetchMostLocationsBusinesses } from '../services/business';
import { Business } from '../services/business/types';

export const mostLocationsBusinessesReportPageController = () => {
  const [mostLocationsBusinesses, setMostLocationsBusinesses] = useState<Business[]>();

  useEffect(() => {
    fetchMostLocationsBusinesses().then(setMostLocationsBusinesses);
  }, [fetchMostLocationsBusinesses]);

  return {
    mostLocationsBusinesses,
  };
};
