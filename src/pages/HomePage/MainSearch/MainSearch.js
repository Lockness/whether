'use-strict';

import PlacesPicker from './PlacesPicker';
import { connect } from 'react-redux';
import { setPlaces } from '../../../redux/actions';
import { getWhetherData } from '../../../services/whetherService';

import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MainSearch = ({setPlaces, getWhether}) => {

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const onSearch = () => {
    setPlaces(origin, destination);
    getWhether(origin, destination);
  }

  return (
    <form>
      <PlacesPicker
        origin={origin}
        destination={destination}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Link to='/whether'>
        <button onClick={onSearch} className="bg-teal text-white py-2 px-4 mt-4 rounded">
          Search
        </button>
      </Link>
    </form>
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
