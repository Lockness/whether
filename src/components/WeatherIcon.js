import React from 'react';
import PropTypes from 'prop-types';

function WeatherIcon({ forecast }) {
  const ICON_TYPES = {
    clear: 'wi-day-sunny',
    sunny: 'wi-day-sunny',
    mostly_clear: 'wi-day-sunny',
    mostly_sunny: 'wi-day-sunny',
    rain: 'wi-rain',
    rain_showers: 'wi-rain',
    fog: 'wi-fog',
    snow: 'wi-snow',
    isolated_snow_showers: 'wi-snow',
    scattered_snow_showers: 'wi-snow',
    cloudy: 'wi-cloudy',
    windy: 'wi-windy'
  };

  const getIconClass = forecast => {
    let iconKey = forecast.toLowerCase().replace(/ /g, '_');
    return ICON_TYPES[iconKey];
  };

  return <i className={'wi ' + getIconClass(forecast)} />;
}

WeatherIcon.propTypes = {
  forecast: PropTypes.string
};

export default WeatherIcon;
