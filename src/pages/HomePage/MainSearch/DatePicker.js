'use-strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Form, DatePicker } from 'antd';

import moment from 'moment';

const DateOfTripPicker = ({ onChange }) => {
  const getArray = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const getDisabledDate = current => {
    return current && current < moment().subtract(1, 'days');
  };

  const getDisabledTime = () => {
    let hours = moment().hours();
    return {
      disabledHours: () => getArray(0, 24).splice(0, hours)
    };
  };

  return (
    <Form.Item label="Date of Trip" style={{ textAlign: 'left' }}>
      <DatePicker
        pullLeft
        showTime
        format="MM-DD-YYYY hh:mm"
        disabledDate={getDisabledDate}
        disabledTime={getDisabledTime}
        onChange={(date, dateString) => onChange(dateString)}
      />
    </Form.Item>
  );
};

DateOfTripPicker.propTypes = {
  onChange: PropTypes.func
};

export default DateOfTripPicker;
