import React from 'react'
import mock_data from './mock_api_call.json'

const WithMockApiData = WrappedComponent => {
  const HOC = () => {
    return (
      <WrappedComponent
        origin="Greensboro, NC"
        destination="Columbus, OH"
        polyline={mock_data.polyline}
        waypoints={mock_data.equidistant_markers}
      />
    )
  }

  return HOC
}

export default WithMockApiData
