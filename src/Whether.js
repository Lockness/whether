import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

const WhetherContainer = styled.div`
  height: 100%;
`;

const Whether = () => (
  <WhetherContainer>
    <Navbar />
    <Route exact path="/" component={HomePage} />
    <Route path="/whether" component={ResultsPage} />
  </WhetherContainer>
);

export default Whether;
