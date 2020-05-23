import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPlaces, fetchWhether } from '../../redux/actions';
import HomePage from './HomePage';

export const HomePageContainer = ({ callSetPlaces, callGetWhether }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const onSearch = () => {
    callSetPlaces(origin, destination);
    callGetWhether(origin, destination);
  };

  return (
    <HomePage
      destination={destination}
      origin={origin}
      onSearch={onSearch}
      setOrigin={setOrigin}
      setDestination={setDestination}
    />
  );
};
HomePageContainer.propTypes = {
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
)(HomePageContainer);
