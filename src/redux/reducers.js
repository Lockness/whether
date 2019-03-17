import {
  CALL_WHETHER,
  SET_PLACES,
  GET_WHETHER_DATA_RECEIVED,
} from './actions';

const whetherApp = (state = {}, action) => {
  switch(action.type){
    case CALL_WHETHER:
      return {...state, directions: action.directions };
    case SET_PLACES:
      return {...state, origin: action.origin, destination: action.destination };
    case GET_WHETHER_DATA_RECEIVED:
      let data = action.data.data;
      let polyline = data.polyline
      let waypoints = data.equidistant_markers;
      return {...state, polyline, waypoints };
    default:
      return state;
  }
}

export default whetherApp;
