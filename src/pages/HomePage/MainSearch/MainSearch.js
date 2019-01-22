'use-strict';

import DatePicker from './DatePicker';
import PlacesPicker from './PlacesPicker';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    let url = 'https://osjmxav54i.execute-api.us-east-1.amazonaws.com/beta/whether?origin=cleveland&destination=washington+dc'
    axios.get(
      url,
      {
        params: {
          headers: {'Access-Control-Allow-Origin': '*'}
        }
      }
    ).then(res => {
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
