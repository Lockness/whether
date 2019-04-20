import { combineReducers } from 'redux';
import { SET_PLACES, GET_WHETHER_DATA, GET_WHETHER_DATA_RECEIVED, GET_WHETHER_DATA_ERROR } from './actions';

const places = (state = {}, action) => {
  switch (action.type) {
    case SET_PLACES:
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
  polyline: undefined,
  waypoints: undefined
};
const whether = (state = initialWhetherState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return initialWhetherState;
    case GET_WHETHER_DATA:
      return {
        ...state,
        isFetching: true
      };
    case GET_WHETHER_DATA_RECEIVED:
      return {
        ...state,
        polyline: action.polyline,
        waypoints: action.waypoints,
        isFetching: false
      };
    case GET_WHETHER_DATA_ERROR:
      return {
        ...state,
        isFetching: false
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
