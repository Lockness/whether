'use-strict';

import React from 'react';
import { connect } from 'react-redux';

import Map from './Map';
// import WithMockApiData from './WithMockApiData';
import WeatherPoints from './WeatherPoints';
import Spinner from '../../components/Spinner/';

const ResultsPage = ({origin, destination, waypoints, polyline}) => {

  let outputJsx = (
    <React.Fragment>
      <p className="align-middle text-center text-3xl mt-32">
        Loading your trip{' '}
        <span role="img" aria-label="smile">
          😁
        </span>
      </p>
      <Spinner />
    </React.Fragment>
  );
  if (waypoints && waypoints.length > 0) {
    outputJsx = (
      <div id="results" className="text-center h-full">
        <div className="mt-1 mb-1 p-1">
          <h1 className="mb-1">Heres the weather for the trip</h1>
          <p>
            Starting in {origin} and finishing in {destination}
          </p>
        </div>
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full h-full">
            <Map waypoints={waypoints} polyline={polyline} />
          </div>
          <div className="h-full overflow-scroll w-full md:w-half">
            <WeatherPoints waypoints={waypoints} />
          </div>
        </div>
      </div>
    );
  }

  return outputJsx;
};

const mapStateToProps = (state, props) => ({
  origin: state.places.origin,
  destination: state.places.destination,
  waypoints: state.whether.waypoints,
  polyline: state.whether.polyline
})

export default connect(mapStateToProps)(ResultsPage);
// export default WithMockApiData(ResultsPage);
