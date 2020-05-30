import whetherService from '../services/whetherService';
import * as types from './actionTypes';

// Places Actions
export const setPlaces = (origin, destination) => {
  return {
    type: types.SET_PLACES,
    origin,
    destination
  };
};

// Whether Actions
export const getWhetherData = () => {
  return {
    type: types.GET_WHETHER_DATA
  };
};

export const getWhetherDataReceived = response => {
  const { data } = response;
  const { polyline } = data;
  const waypoints = data.equidistant_markers;
  return {
    type: types.GET_WHETHER_DATA_RECEIVED,
    polyline,
    waypoints
  };
};

export const getWhetherDataError = (response, error) => {
  return {
    type: types.GET_WHETHER_DATA_ERROR,
    error
  };
};

// Thunk Actions
export const fetchWhether = (origin, destination, waypointDistance = 20) => {
  return dispatch => {
    dispatch(getWhetherData(origin, destination));

    return whetherService(origin, destination, waypointDistance).then(
      response => dispatch(getWhetherDataReceived(response)),
      error => dispatch(getWhetherDataError(error)) // Can't use catch
    );
  };
};
