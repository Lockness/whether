import React from 'react';
import PropTypes from 'prop-types';

function WeatherIcon({ forecast }) {
  const ICON_TYPES = {
    clear: 'wi-day-sunny',
    sunny: 'wi-day-sunny',
    mostly_clear: 'wi-day-sunny',
    mostly_sunny: 'wi-day-sunny',
    partly_sunny: 'wi-day-cloudy',
    rain: 'wi-rain',
    rain_showers: 'wi-showers',
    chance_rain_showers: 'wi-showers',
    scattered_rain_showers: 'wi-showers',
    isolated_rain_showers: 'wi-showers',
    chance_light_rain: 'wi-showers',
    light_rain_likely: 'wi-showers',
    rain_showers_likely: 'wi-showers',
    slight_chance_rain_showers: 'wi-rain-mix',
    slight_chance_rain_and_snow: 'wi-sleet',
    chance_rain_and_snow_showers: 'wi-sleet',
    chance_rain_and_snow: 'wi-sleet',
    rain_and_snow_likely: 'wi-sleet',
    fog: 'wi-fog',
    snow: 'wi-snow',
    light_snow: 'wi-snow',
    light_snow_likely: 'wi-snow',
    isolated_snow_showers: 'wi-snow',
    scattered_snow_showers: 'wi-snow',
    chance_snow_showers: 'wi-snow',
    cloudy: 'wi-cloudy',
    mostly_cloudy: 'wi-cloudy',
    partly_cloudy: 'wi-cloud',
    windy: 'wi-windy',
    slight_chance_showers_and_thunderstorms: 'wi-storm-showers',
    chance_showers_and_thunderstorms: 'wi-storm-showers'
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
