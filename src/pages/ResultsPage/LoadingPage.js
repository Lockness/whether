import React from 'react';
import styled from 'styled-components';

import Spinner from '../../components/Spinner';

const LoadingMessage = styled.p`
  vertical-align: middle;
  font-size: 2rem;
  text-align: center;
  margin-top: 8rem;
`;

const LoadingPage = () => (
  <React.Fragment>
    <LoadingMessage>
      Loading your trip{' '}
      <span role="img" aria-label="smile">
        😁
      </span>
    </LoadingMessage>
    <Spinner />
  </React.Fragment>
);

export default LoadingPage;
