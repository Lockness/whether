import { combineReducers } from 'redux';
import * as types from './actionTypes';

const initialPlacesState = {
  origin: '',
  destination: ''
};
export const places = (state = initialPlacesState, action) => {
  switch (action.type) {
    case types.SET_PLACES:
      return {
        ...state,
        origin: action.origin,
        destination: action.destination
      };
    default:
      return state;
  }
};

const initialWhetherState = {
  isFetching: false,
  hasErrored: false,
  polyline: undefined,
  waypoints: undefined
};
export const whether = (state = initialWhetherState, action) => {
  switch (action.type) {
    case types.GET_WHETHER_DATA:
      return {
        ...state,
        isFetching: true,
        hasErrored: false
      };
    case types.GET_WHETHER_DATA_RECEIVED:
      return {
        ...state,
        polyline: action.polyline,
        waypoints: action.waypoints,
        isFetching: false,
        hasErrored: false
      };
    case types.GET_WHETHER_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        hasErrored: true
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  places,
  whether
});

export default rootReducer;
