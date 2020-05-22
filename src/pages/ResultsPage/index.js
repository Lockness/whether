import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import WithMockApiData from './WithMockApiData';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
import ResultsPage from './ResultsPage';

const ResultsPageContainer = ({ origin, destination, waypoints, polyline, hasErrored, isFetching, history }) => {
  if (hasErrored) {
    return <ErrorPage goBack={() => history.go(-1)} />;
  }
  if (isFetching) {
    return <LoadingPage />;
  }
  if (!waypoints || !waypoints.length > 0) {
    // No fetching, erroring, or waypoint(ing) probably means a refresh on /whether
    history.push('/');
    return null;
  }

  return <ResultsPage destination={destination} origin={origin} polyline={polyline} waypoints={waypoints} />;
};

ResultsPageContainer.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  waypoints: PropTypes.arrayOf(PropTypes.object),
  polyline: PropTypes.string,
  hasErrored: PropTypes.bool,
  isFetching: PropTypes.bool,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  origin: state.places.origin,
  destination: state.places.destination,
  waypoints: state.whether.waypoints,
  polyline: state.whether.polyline,
  isFetching: state.whether.isFetching,
  hasErrored: state.whether.hasErrored
});

export default connect(mapStateToProps)(withRouter(ResultsPageContainer));
// export default WithMockApiData(ResultsPageContainer);
