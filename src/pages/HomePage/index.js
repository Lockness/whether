import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPlaces, fetchWhether } from '../../redux/actions';
import HomePage from './HomePage';

const getCoordinates = location => {
  return `${location.lat},${location.lng}`;
};

export const HomePageContainer = ({ callSetPlaces, callGetWhether }) => {
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const [waypointDistance, setWaypointDistance] = useState(20);

  const onSearch = e => {
    if (!Object.keys(origin).length || !Object.keys(destination).length) {
      e.preventDefault();
      return;
    }

    const originCoordinates = getCoordinates(origin);
    const destinationCoordinates = getCoordinates(destination);
    callSetPlaces(origin.address, destination.address);
    callGetWhether(originCoordinates, destinationCoordinates, waypointDistance);
  };

  return (
    <HomePage
      destination={destination}
      origin={origin}
      waypointDistance={waypointDistance}
      onSearch={onSearch}
      setOrigin={setOrigin}
      setDestination={setDestination}
      setWaypointDistance={value => setWaypointDistance(parseInt(value, 10))}
    />
  );
};
HomePageContainer.propTypes = {
  callSetPlaces: PropTypes.func,
  callGetWhether: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  callSetPlaces: (origin, destination) => dispatch(setPlaces(origin, destination)),
  callGetWhether: (origin, destination, waypointDistance) =>
    dispatch(fetchWhether(origin, destination, waypointDistance))
});

export default connect(
  null,
  mapDispatchToProps
)(HomePageContainer);
