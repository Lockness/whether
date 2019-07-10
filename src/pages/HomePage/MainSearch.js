import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setPlaces, fetchWhether } from '../../redux/actions';
import PlacesPicker from './PlacesPicker';

const Button = props => {
  return (
    <button
      onClick={props.onClick} // eslint-disable-line react/prop-types
      {...props}
      className="bg-transparent border-2 border-solid border-white font-bold text-white py-2 px-4
                mt-4 rounded hover:bg-indigo hover:border-transparent hover:text-white"
    >
      Search
    </button>
  );
};

const MainSearch = ({ callSetPlaces, callGetWhether }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const onSearch = () => {
    callSetPlaces(origin, destination);
    callGetWhether(origin, destination);
  };

  return (
    <form>
      <PlacesPicker origin={origin} destination={destination} setOrigin={setOrigin} setDestination={setDestination} />
      <Link to="/whether">
        <Button onClick={onSearch} />
      </Link>
    </form>
  );
};

MainSearch.propTypes = {
  callSetPlaces: PropTypes.func,
  callGetWhether: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  callSetPlaces: (origin, destination) => dispatch(setPlaces(origin, destination)),
  callGetWhether: (origin, destination) => dispatch(fetchWhether(origin, destination))
});

export default connect(
  null,
  mapDispatchToProps
)(MainSearch);
