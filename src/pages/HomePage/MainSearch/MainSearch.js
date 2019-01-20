'use-strict';

import DatePicker from './DatePicker';
import PlacesPicker from './PlacesPicker';
import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'antd';

class MainSearch extends React.Component {
  state = {
    origin: '',
    destination: '',
    date: ''
  }

  onLocationChange = (name, address) => {
    this.setState({[name]: address});
  }

  onDateChange = (date) => {
    this.setState({'date': date});
  }

  render() {
    return (
      <Form layout="vertical">
        <PlacesPicker
          origin={this.state.origin}
          destination={this.state.destination}
          onChange={this.onLocationChange}
        />
        <DatePicker
          date={this.state.date}
          onChange={this.onDateChange}
        />
        <Form.Item>
          <Button>Search</Button>
        </Form.Item>
      </Form>
    );
  }
}

MainSearch.propTypes = {
  form: PropTypes.object
};

const WrappedMainSearch = Form.create()(MainSearch);
export default WrappedMainSearch;
