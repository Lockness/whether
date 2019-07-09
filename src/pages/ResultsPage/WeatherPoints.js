import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import WeatherIcon from '../../components/WeatherIcon';

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

const WeatherCard = ({ arrivalTime, city, forecast, position }) => {
  return (
    <div className="w-full bg-white text-indigo h-32 shadow border-2 border-indigo-light rounded">
      <h4 className="mb-2 mt-1 py-1 border-b-2 border-grey">{`${position} : ${city}`}</h4>
      <p className="align-middle">{arrivalTime}</p>
      <p className="align-middle">{forecast}</p>
      <div className="mt-3">
        <WeatherIcon forecast={forecast} />
      </div>
    </div>
  );
};
WeatherCard.propTypes = {
  arrivalTime: PropTypes.string,
  city: PropTypes.string,
  forecast: PropTypes.string,
  position: PropTypes.number
};

const WeatherPoints = ({ waypoints }) => {
  const startMoment = moment();
  return (
    <div className="flex flex-col justify-center">
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
    </div>
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
