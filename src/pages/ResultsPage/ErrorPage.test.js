import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import jest from 'jest-mock';
import { mount } from 'enzyme';

import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  const goBackMock = jest.fn();
  const wrapper = mount(<ErrorPage goBack={goBackMock} />);

  it('renders the sorry text', () => {
    expect(wrapper.find('p').text()).toContain('Looks like something went wrong');
  });

  describe('back button', () => {
    const button = wrapper.find('button');

    it('renders the back button', () => {
      expect(button.text()).toEqual('Go Back');
    });

    it('calls the goBack prop on click', () => {
      expect(wrapper.props().goBack).toEqual(goBackMock);

      expect(goBackMock.mock.calls.length).toEqual(0);
      button.simulate('click');
      expect(goBackMock.mock.calls.length).toEqual(1);
    });
  });
});
