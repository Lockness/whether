import React from 'react';
import styled from 'styled-components';

import MainSearch from './MainSearch';

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

const HomePage = () => (
  <HomePageContainer>
    <HomeIntro>
      <WhetherHeader>Whether</WhetherHeader>
      <p>A place to get weather information on a trip</p>
    </HomeIntro>
    <MainSearch />
  </HomePageContainer>
);

export default HomePage;
