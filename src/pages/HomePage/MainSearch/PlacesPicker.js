'use-strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input } from 'antd';


class PlacesPicker extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form.Item label="Starting Location">
          {this.props.getFieldDecorator('origin')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Destination">
          {this.props.getFieldDecorator('destination')(<Input/>)}
        </Form.Item>
      </React.Fragment>
    );
  }
}

PlacesPicker.propTypes = {
  getFieldDecorator: PropTypes.func
};

export default PlacesPicker;
