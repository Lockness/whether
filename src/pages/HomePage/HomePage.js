'use-strict';

import MainSearch from './MainSearch/MainSearch';
import React from 'react';

const HomePage = () => {
  return (
    <div className="text-center text-white bg-indigo-darker">
      <div className="pt-12 mb-10">
        <h1 className="mb-4">Whether</h1>
        <p>A place to get weather information on a trip</p>
      </div>
      <MainSearch />
    </div>
  );
};

export default HomePage;
