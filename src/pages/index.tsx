import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <button>
        <Link to='business/most-locations-businesses-report'>Most Locations Businesses Report</Link>
      </button>
      <button>
        <Link to='business/oldest-business-report'>Oldest Business Report</Link>
      </button>
    </>
  );
};

export default HomePage;
