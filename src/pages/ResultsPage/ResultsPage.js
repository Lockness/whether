import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Map from './Map';
// import WithMockApiData from './WithMockApiData';
import WeatherPoints from './WeatherPoints';
import Spinner from '../../components/Spinner';

const LoadingPage = () => (
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

const ResultsPage = ({ origin, destination, waypoints, polyline }) => {
  if (!waypoints || !waypoints.length > 0) {
    return <LoadingPage />;
  }
  return (
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
};

ResultsPage.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  waypoints: PropTypes.arrayOf(PropTypes.object),
  polyline: PropTypes.string
};

const mapStateToProps = state => ({
  origin: state.places.origin,
  destination: state.places.destination,
  waypoints: state.whether.waypoints,
  polyline: state.whether.polyline
});

export default connect(mapStateToProps)(ResultsPage);
// export default WithMockApiData(ResultsPage);
