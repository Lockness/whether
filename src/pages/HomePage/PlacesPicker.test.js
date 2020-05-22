import React from 'react';
import { mount } from 'enzyme';

import PlacesPicker from './PlacesPicker';

describe('PlacesPicker', () => {
  const component = mount(<PlacesPicker />);

  it('displays the origin input', () => {
    expect(component.find('#origin').exists()).toBeTruthy();
  });

  it('displays the destination input', () => {
    expect(component.find('#destination').exists()).toBeTruthy();
  });
});
