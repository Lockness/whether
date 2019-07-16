import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import WeatherCard from './WeatherCard';

const getAddressCity = address => {
  const cityLocation = 1;
  const stateLocation = 2;
  const delimiter = ',';
  const split = address.split(delimiter);
  const city = split[cityLocation];
  const state = split[stateLocation].trim().split(/[ ]+/)[0];
  return `${city}, ${state}`;
};

const getArrivalTime = (startMoment, arrivalDelta) => {
  const arrivalMoment = moment(startMoment).add(arrivalDelta, 'm');
  return arrivalMoment.format('h:mm A');
};

const WeatherPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.5rem;
`;

const WeatherPoints = ({ waypoints }) => {
  const startMoment = moment();
  return (
    <WeatherPointsContainer>
      {waypoints.map((waypoint, index) => {
        const arrivalTime = getArrivalTime(startMoment, waypoint.arrival_time);
        const city = getAddressCity(waypoint.address);
        return (
          <WeatherCard
            key={index}
            arrivalTime={arrivalTime}
            city={city}
            forecast={waypoint.weather_data.shortForecast}
            position={index + 1}
          />
        );
      })}
    </WeatherPointsContainer>
  );
};
WeatherPoints.propTypes = {
  waypoints: PropTypes.arrayOf(
    PropTypes.shape({
      arrival_time: PropTypes.number,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      weather_data: PropTypes.object
    })
  )
};

export default WeatherPoints;
