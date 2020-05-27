import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import jest from 'jest-mock';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  const destination = 'Columbus, OH';
  const origin = 'Ohio State University';
  const onSearchMock = jest.fn();
  const setDestinationMock = jest.fn();
  const setOriginMock = jest.fn();

  const wrapper = mount(
    <MemoryRouter>
      <HomePage
        destination={destination}
        origin={origin}
        onSearch={onSearchMock}
        setDestination={setDestinationMock}
        setOrigin={setOriginMock}
      />
    </MemoryRouter>
  );

  it('renders the header', () => {
    expect(wrapper.find('h1').text()).toEqual('Whether');
  });

  it('renders the tag line', () => {
    expect(wrapper.find('p').text()).toContain('weather information');
  });

  describe('PlacesPicker', () => {
    const placesPicker = wrapper.find('PlacesPicker');

    it('is rendered', () => {
      expect(placesPicker.length).toEqual(1);
    });

    it('receives the origin and setOrigin props', () => {
      expect(placesPicker.props().origin).toBe(origin);
      expect(placesPicker.props().setOrigin).toBe(setOriginMock);
    });

    it('receives the destination and setDestination props', () => {
      expect(placesPicker.props().destination).toBe(destination);
      expect(placesPicker.props().setDestination).toBe(setDestinationMock);
    });
  });

  describe('search button', () => {
    const button = wrapper.find('button');

    it('says Search', () => {
      expect(button.text()).toEqual('Search');
    });

    it('calls onSearch when clicked', () => {
      expect(onSearchMock.mock.calls.length).toEqual(0);
      button.simulate('click');
      expect(onSearchMock.mock.calls.length).toEqual(1);
    });
  });
});
