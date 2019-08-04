import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Map from './Map';
// import WithMockApiData from './WithMockApiData';
import WeatherPoints from './WeatherPoints';
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';

const ResultsPageContainer = styled.div`
  height: 80vh;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const WaypointsContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  margin-top: 5px;
  height: 70%;

  @media (min-width: 1024px) {
    width: 40%;
    height: 100%;
    margin-top: 0;
  }
`;

const ResultsHeader = styled.div`
  margin: 0.5rem 0;
`;

const ResultsPage = ({ origin, destination, waypoints, polyline, hasErrored, isFetching, history }) => {
  if (hasErrored) {
    return <ErrorPage goBack={() => history.go(-1)} />;
  }
  if (isFetching) {
    return <LoadingPage />;
  }
  if (!waypoints || !waypoints.length > 0) {
    // Not fetching and no waypoints probably means a refresh on /whether
    history.push('/');
    return null;
  }
  return (
    <ResultsPageContainer>
      <ResultsHeader>
        <h1>Heres the weather for the trip</h1>
        <p>
          Starting in {origin} and finishing in {destination}
        </p>
      </ResultsHeader>
      <FlexContainer>
        <Map waypoints={waypoints} polyline={polyline} />
        <WaypointsContainer>
          <WeatherPoints waypoints={waypoints} />
        </WaypointsContainer>
      </FlexContainer>
    </ResultsPageContainer>
  );
};

ResultsPage.propTypes = {
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

export default connect(mapStateToProps)(withRouter(ResultsPage));
// export default WithMockApiData(ResultsPage);
