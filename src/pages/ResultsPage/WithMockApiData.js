import React from 'react';
import mock_data from './mock_api_call.json';

const WithMockApiData = (WrappedComponent) => {
  const HOC = () => {
    return (
      <WrappedComponent
        origin='Greensboro, NC'
        destination='Columbus, OH'
        directions={mock_data.directions}
        waypoints={mock_data.equidistant_markers}
      />
    );
  }

  return HOC;
}

export default WithMockApiData;
