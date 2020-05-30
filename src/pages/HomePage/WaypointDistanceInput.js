import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from '../../components/StyledInput';

const WaypointDistanceInput = ({ waypointDistance, setWaypointDistance }) => (
  <StyledInput
    label="Waypoint Distance:"
    value={waypointDistance}
    onChange={e => setWaypointDistance(e.target.value)}
    type="number"
  />
);
WaypointDistanceInput.propTypes = {
  waypointDistance: PropTypes.number,
  setWaypointDistance: PropTypes.func
};

export default WaypointDistanceInput;
