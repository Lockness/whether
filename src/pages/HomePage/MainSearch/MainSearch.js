'use-strict';

import PlacesPicker from './PlacesPicker';
import { connect } from 'react-redux';
import { setPlaces } from '../../../redux/actions';
import { getWhetherData } from '../../../services/whetherService';

import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <button
      {...props}
      className="bg-transparent border-2 border-solid border-white text-white py-2 px-4 mt-4 rounded hover:bg-indigo hover:border-transparent hover:text-white">
      Search
    </button>
  );
}

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
        <Button onClick={onSearch}/>
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
