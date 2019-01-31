import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

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
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {directions.legs.map((direction , index) => {
        let waypoint = waypoints[index];
        let city = getAddressCity(direction.start_address);
        return (
        <Card 
          title={(index + 1) + ': ' + city}
          style={{width: 200, margin: '20px'}}
          key={index}
        >
          <p>{waypoint.weather_data.shortForecast}</p> 
        </Card>
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
