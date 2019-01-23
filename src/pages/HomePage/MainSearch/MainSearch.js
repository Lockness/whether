'use-strict';

import { callWhether } from '../../../services/awsService';
import DatePicker from './DatePicker';
import PlacesPicker from './PlacesPicker';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

  onSearch = () => {
    callWhether(this.state.origin, this.state.destination)
    .then(res => {
      console.log(res.data)
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
          <Link to='/whether'>
            <Button
              onClick={this.onSearch}
            >
              Search
            </Button>
          </Link>
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
