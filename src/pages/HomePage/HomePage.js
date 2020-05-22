import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PlacesPicker from './PlacesPicker';
import StyledButton from '../../components/StyledButton';

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

const HomePage = ({ destination, origin, onSearch, setDestination, setOrigin }) => (
  <HomePageContainer>
    <HomeIntro>
      <WhetherHeader>Whether</WhetherHeader>
      <p>A place to get weather information on a trip</p>
    </HomeIntro>
    <form>
      <PlacesPicker origin={origin} destination={destination} setOrigin={setOrigin} setDestination={setDestination} />
      <Link to="/whether">
        <StyledButton onClick={onSearch}>Search</StyledButton>
      </Link>
    </form>
  </HomePageContainer>
);
HomePage.propTypes = {
  destination: PropTypes.string,
  origin: PropTypes.string,
  onSearch: PropTypes.func,
  setOrigin: PropTypes.func,
  setDestination: PropTypes.func
};

export default HomePage;
