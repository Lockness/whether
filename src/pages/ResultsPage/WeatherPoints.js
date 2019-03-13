import React from 'react';
import PropTypes from 'prop-types';


const WeatherPoints = ({waypoints, directions}) => {

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
      {directions.legs.map((direction , index) => {
        let waypoint = waypoints[index];
        let city = getAddressCity(direction.start_address);
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
