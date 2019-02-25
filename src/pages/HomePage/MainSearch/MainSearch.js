'use-strict';

import DatePicker from './DatePicker';
import PlacesPicker from './PlacesPicker';
import { connect } from 'react-redux';
import { setPlaces } from '../../../redux/actions';
import { getWhetherData } from '../../../services/whetherService';

import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Form, Button } from 'antd';

const MainSearch = ({setPlaces, getWhether}) => {

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const onSearch = () => {
    setPlaces(origin, destination);
    getWhether(origin, destination);
  }

  return (
    <Form layout="vertical">
      <PlacesPicker
        origin={origin}
        destination={destination}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <DatePicker
        date={date}
        onChange={setDate}
      />
      <Form.Item>
        <Link to='/whether'>
          <Button onClick={onSearch}>
            Search
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
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
