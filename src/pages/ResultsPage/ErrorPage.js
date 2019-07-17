import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledButton from '../../components/StyledButton';

const ErrorContainer = styled.div`
  vertical-align: middle;
  text-align: center;
`;

const ErrorMessage = styled.p`
  vertical-align: middle;
  font-size: 2rem;
  text-align: center;
  margin-top: 8rem;
`;

const ErrorPage = ({ goBack }) => (
  <ErrorContainer>
    <ErrorMessage>
      Looks like something went wrong
      <span role="img" aria-label="sadface">
        😔
      </span>
    </ErrorMessage>
    <StyledButton onClick={goBack}>Go Back</StyledButton>
  </ErrorContainer>
);
ErrorPage.propTypes = {
  goBack: PropTypes.func
};

export default ErrorPage;
