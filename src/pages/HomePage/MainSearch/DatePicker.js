'use-strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Form, DatePicker } from 'antd';

class DateOfTripPicker extends React.Component {
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
      <Form.Item label="Date of Trip" style={{'textAlign': 'left'}}>
        {this.props.getFieldDecorator('title')(
          <DatePicker pullLeft/>
        )}
      </Form.Item>
    );
  }
}

DateOfTripPicker.propTypes = {
  getFieldDecorator: PropTypes.func
};

export default DateOfTripPicker;
