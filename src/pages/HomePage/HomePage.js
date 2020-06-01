import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PlacesPicker from './PlacesPicker';
import StyledButton from '../../components/StyledButton';
import WaypointDistanceInput from './WaypointDistanceInput';

const HomePageContainer = styled.div`
  color: white;
  text-align: center;
`;

const HomeIntro = styled.div`
  padding-top: 3rem;
  margin-bottom: 2.5rem;
`;

const WhetherHeader = styled.h1`
  margin-bottom: 1rem;
`;

const InputsContainer = styled.div`
  margin: auto;
  diplay: flex;
  flex: 0 1 auto;
  justify-content: center;
  flex-direction: column;
  width: 70%;

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const HomePage = ({
  destination,
  origin,
  waypointDistance,
  onSearch,
  setDestination,
  setOrigin,
  setWaypointDistance
}) => (
  <HomePageContainer>
    <HomeIntro>
      <WhetherHeader>Whether</WhetherHeader>
      <p>A place to get weather information on a trip</p>
    </HomeIntro>
    <form>
      <InputsContainer>
        <PlacesPicker origin={origin} destination={destination} setOrigin={setOrigin} setDestination={setDestination} />
        <WaypointDistanceInput waypointDistance={waypointDistance} setWaypointDistance={setWaypointDistance} />
      </InputsContainer>
      <Link to="/whether">
        <StyledButton onClick={onSearch}>Search</StyledButton>
      </Link>
    </form>
  </HomePageContainer>
);
HomePage.propTypes = {
  destination: PropTypes.object,
  origin: PropTypes.object,
  waypointDistance: PropTypes.number,
  onSearch: PropTypes.func,
  setOrigin: PropTypes.func,
  setDestination: PropTypes.func,
  setWaypointDistance: PropTypes.func
};

export default HomePage;
