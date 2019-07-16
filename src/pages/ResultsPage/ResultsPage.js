import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Map from './Map';
// import WithMockApiData from './WithMockApiData';
import WeatherPoints from './WeatherPoints';
import LoadingPage from './LoadingPage';

const ResultsPageContainer = styled.div`
  height: 80vh;
  text-align: center;
`;

const WaypointsContainer = styled.div`
  overflow-y: scroll;
  width: 40%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const ResultsHeader = styled.div`
  margin: 0.5rem 0;
`;

const ResultsPage = ({ origin, destination, waypoints, polyline }) => {
  if (!waypoints || !waypoints.length > 0) {
    return <LoadingPage />;
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
