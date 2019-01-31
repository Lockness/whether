'use-strict';

import DatePicker from './DatePicker';
import PlacesPicker from './PlacesPicker';
import { connect } from 'react-redux';
import { setPlaces } from '../../../redux/actions';
import { getWhetherData } from '../../../services/whetherService';

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
    this.props.setPlaces(this.state.origin, this.state.destination);
    this.props.getWhether(this.state.origin, this.state.destination);
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
  setPlaces: PropTypes.func,
  getWhether: PropTypes.func
};


const mapDispatchToProps = (dispatch, props) => ({
  setPlaces: (origin, destination) => dispatch(setPlaces(origin, destination)),
  getWhether: (origin, destination) => dispatch(getWhetherData(origin, destination))
})

export default connect(null, mapDispatchToProps)(MainSearch);
