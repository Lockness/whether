'use-strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Form, DatePicker } from 'antd';

class DateOfTripPicker extends React.Component {

  render() {
    return (
      <Form.Item label="Date of Trip" style={{'textAlign': 'left'}}>
        <DatePicker pullLeft
          onChange={(date, dateString) => this.props.onChange(dateString)}
        />
      </Form.Item>
    );
  }
}

DateOfTripPicker.propTypes = {
  getFieldDecorator: PropTypes.func
};

export default DateOfTripPicker;
