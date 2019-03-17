import React from 'react';
import PropTypes from 'prop-types';

import WeatherIcon from '../../components/WeatherIcon';


const WeatherPoints = ({ waypoints }) => {

  const getAddressCity = (address) => {
    const cityLocation = 1;
    const stateLocation = 2;
    const delimiter = ',';
    const split = address.split(delimiter);
    const city = split[cityLocation];
    const state = split[stateLocation].trim().split(/[ ]+/)[0];
    return city + ', ' + state;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {waypoints.map((waypoint, index) => {
        let city = getAddressCity(waypoint.address);
        return (
        <div
          key={index}
          className="w-48 m-8 bg-white text-indigo h-32 shadow border-2 border-indigo rounded"
        >
          <h4 className='mb-2 mt-1 py-1 border-b-2 border-grey'>
            {(index + 1) + ':' + city}
          </h4>
          <p className='text-center align-middle'>
            {waypoint.weather_data.shortForecast}
          </p> 
          <div className="mt-3">
            <WeatherIcon forecast={waypoint.weather_data.shortForecast} />
          </div>
        </div>
        )
      })}
    </div>
  );
};

WeatherPoints.propTypes = {
  waypoints: PropTypes.arrayOf(
    PropTypes.shape(
      {
        arrival_time: PropTypes.number,
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
        weather_data: PropTypes.object
      }
    )
  )
};


export default WeatherPoints;
