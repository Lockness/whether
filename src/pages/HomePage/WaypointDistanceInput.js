import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WaypointDistanceHeader = styled.h2`
  font-size: 1.125rem;
  text-align: left;
  margin-left: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 1rem;
  margin: 0.25rem 0.25rem 0.75rem 0.25rem;
  font-weight: 700;
  border-radius: 0.5rem;
  color: #6574cd;
  width: 100%;
`;

const StyledWaypointDistanceContainer = styled.div`
  margin: auto;
  diplay: flex;
  flex: 0 1 auto;
  justify-content: center;
  flex-direction: column;
  width: 70%;

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const WaypointDistanceInput = ({ waypointDistance, setWaypointDistance }) => (
  <StyledWaypointDistanceContainer>
    <WaypointDistanceHeader>Waypoint Distance (optional):</WaypointDistanceHeader>
    <StyledInput
      value={waypointDistance}
      onChange={e => setWaypointDistance(parseInt(e.target.value, 10))}
      type="number"
    />
  </StyledWaypointDistanceContainer>
);
WaypointDistanceInput.propTypes = {
  waypointDistance: PropTypes.number,
  setWaypointDistance: PropTypes.func
};

export default WaypointDistanceInput;
