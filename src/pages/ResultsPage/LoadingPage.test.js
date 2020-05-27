import React from 'react';
import { mount } from 'enzyme';

import LoadingPage from './LoadingPage';

describe('LoadingPage', () => {
  const wrapper = mount(<LoadingPage />);

  it('renders the waiting text', () => {
    expect(wrapper.find('p').text()).toContain('Loading your trip');
  });

  it('renders the spinner', () => {
    expect(wrapper.find('spinner')).toBeTruthy();
  });
});
