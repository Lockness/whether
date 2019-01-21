'use-strict';

import DatePicker from './DatePicker';
import PlacesPicker from './PlacesPicker';
import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'antd';

import axios from 'axios';

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

  onSearch = () => {
    let url = 'https://osjmxav54i.execute-api.us-east-1.amazonaws.com/beta/directions?origin=disneyland&destination=home'
    axios.get(
      url,
      {
        params: {
          headers: {'Access-Control-Allow-Origin': '*'}
        }
      }
    ).then(res => {
      console.log(res)
    });
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
          <Button
            onClick={this.onSearch}
          >
            Search
          </Button>
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
