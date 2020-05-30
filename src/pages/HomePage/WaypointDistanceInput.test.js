import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import jest from 'jest-mock';

import { mount } from 'enzyme';

import WaypointDistanceInput from './WaypointDistanceInput';

describe('WaypointDistanceInput', () => {
  const callSetWaypointDistanceMock = jest.fn();
  const component = mount(<WaypointDistanceInput setWaypointDistance={callSetWaypointDistanceMock} />);

  it('displays the header', () => {
    expect(component.find('h2').text()).toEqual('Waypoint Distance (optional):');
  });

  describe('waypointDistanceInput', () => {
    const waypointDistanceInput = component.find('input');

    it('displays the input', () => {
      expect(waypointDistanceInput.exists()).toBeTruthy();
    });

    it('changes the value on change', () => {
      expect(callSetWaypointDistanceMock.mock.calls.length).toEqual(0);
      waypointDistanceInput.simulate('change', { target: { value: 10 } });
      expect(callSetWaypointDistanceMock.mock.calls.length).toEqual(1);
    });
  });
});
