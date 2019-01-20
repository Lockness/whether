'use-strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Form, DatePicker } from 'antd';

import moment from 'moment';

class DateOfTripPicker extends React.Component {

  getArray = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  getDisabledDate = (current) => {
    return current && current < moment().subtract(1, 'days');
  }

  getDisabledTime = () => {
    let hours = moment().hours()
    return {
      disabledHours: () => this.getArray(0,24).splice(0, hours)
    }
  }

  render() {
    return (
      <Form.Item label="Date of Trip" style={{'textAlign': 'left'}}>
        <DatePicker
          pullLeft
          showTime
          format='MM-DD-YYYY hh:mm'
          disabledDate={this.getDisabledDate}
          disabledTime={this.getDisabledTime}
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
