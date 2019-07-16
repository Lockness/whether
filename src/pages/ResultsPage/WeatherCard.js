import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcon from '../../components/WeatherIcon';

const WeatherCardContainer = styled.div`
  width: 100%;
  color: #6574cd;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 8rem;
  border: 2px solid transparent;
  margin: 0px 5px 5px 5px;
  border-radius: 0.25rem;
  background-color: white;
  vertical-align: middle;
`;

const WeatherCardHeader = styled.h2`
  margin: 0.5rem 0 0.25rem 0;
  padding: 0.25rem 0 0.25rem 0;
  border-bottom: 2px solid #b8c2cc;
  font-size: 1.15rem;
`;

const IconContainer = styled.div`
  margin-top: 10px;
`;

const WeatherCard = ({ arrivalTime, city, forecast, position }) => {
  return (
    <WeatherCardContainer>
      <WeatherCardHeader>{`${position} : ${city}`}</WeatherCardHeader>
      <p>{arrivalTime}</p>
      <p>{forecast}</p>
      <IconContainer>
        <WeatherIcon forecast={forecast} />
      </IconContainer>
    </WeatherCardContainer>
  );
};
WeatherCard.propTypes = {
  arrivalTime: PropTypes.string,
  city: PropTypes.string,
  forecast: PropTypes.string,
  position: PropTypes.number
};

export default WeatherCard;
