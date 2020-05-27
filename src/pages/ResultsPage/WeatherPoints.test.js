import React from 'react';
import { mount } from 'enzyme';

import WeatherPoints from './WeatherPoints';

describe('WeatherPoints', () => {
  const waypoints = [
    {
      arrival_time: 1,
      address: '101 High St, Columbus, OH 43138, USA',
      lat: 1,
      lng: 1,
      weather_data: { shortForecast: 'sunny' }
    },
    {
      arrival_time: 2,
      address: '102 High St, Columbus, OH 43138, USA',
      lat: 1,
      lng: 1,
      weather_data: { shortForecast: 'rainy' }
    },
    {
      arrival_time: 3,
      address: '103 High St, Columbus, OH 43138, USA',
      lat: 1,
      lng: 1,
      weather_data: { shortForecast: 'cloudy' }
    }
  ];

  const wrapper = mount(<WeatherPoints waypoints={waypoints} />);

  it('renders a WeatherCard for each waypoint', () => {
    expect(wrapper.find('WeatherCard').length).toEqual(waypoints.length);
  });
});
