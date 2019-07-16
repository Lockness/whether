import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setPlaces, fetchWhether } from '../../redux/actions';
import PlacesPicker from './PlacesPicker';
import StyledButton from '../../components/StyledButton';

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
        <StyledButton onClick={onSearch}>Search</StyledButton>
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
