import React from 'react';
import { mount } from 'enzyme';

import ResultsPage from './ResultsPage';

describe('ResultsPage', () => {
  const destination = 'Columbus, OH';
  const origin = 'Ohio State University';
  const polyline = 'q|{rFrnqyNvn@c[VykE|l@gjBtoBaqBz_Be_@ziBsoDtwCo~El`';
  const waypoints = [];

  const wrapper = mount(
    <ResultsPage destination={destination} origin={origin} polyline={polyline} waypoints={waypoints} />
  );

  describe('ResultsHeader', () => {
    it('renders the title', () => {
      expect(wrapper.find('h1').text()).toEqual('Heres the weather for the trip');
    });

    it('renders the origin and destination', () => {
      expect(wrapper.find('p').text()).toEqual(`Starting in ${origin} and finishing in ${destination}`);
    });
  });

  describe('Map', () => {
    const map = wrapper.find('Map');

    it('is rendered', () => {
      expect(map.length).toEqual(1);
    });

    it('receives the polyline prop', () => {
      expect(map.props().polyline).toBe(polyline);
    });

    it('receives the waypoints prop', () => {
      expect(map.props().waypoints).toBe(waypoints);
    });
  });

  describe('WeatherPoints', () => {
    const weatherPoints = wrapper.find('WeatherPoints');

    it('is rendered', () => {
      expect(weatherPoints.length).toEqual(1);
    });

    it('receives the waypoints prop', () => {
      expect(weatherPoints.props().waypoints).toBe(waypoints);
    });
  });
});
