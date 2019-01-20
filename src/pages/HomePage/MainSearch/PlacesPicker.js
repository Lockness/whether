'use-strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input } from 'antd';

import Script from 'react-load-script';

class PlacesPicker extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <Form.Item label="Starting Location">
          <Input
            onChange={(e) => this.props.onChange('origin', e)}
          />
        </Form.Item>
        <Form.Item label="Destination">
          <Input
            onChange={(e) => this.props.onChange('destination', e)}
          />
        </Form.Item>
      </React.Fragment>
    );
  }
}

PlacesPicker.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  onChange: PropTypes.func
};

export default PlacesPicker;
