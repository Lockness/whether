import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import jest from 'jest-mock';
import { shallow } from 'enzyme';

import { HomePageContainer } from './index';

describe('HomePageContainer', () => {
  const callSetPlacesMock = jest.fn();
  const callGetWhetherMock = jest.fn();

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomePageContainer callGetWhether={callGetWhetherMock} callSetPlaces={callSetPlacesMock} />);
  });

  it('renders the HomePage', () => {
    expect(wrapper.find('HomePage').length).toEqual(1);
  });
});
