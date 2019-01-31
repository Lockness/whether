import { CALL_WHETHER, SET_PLACES } from './actions';

const whetherApp = (state = {}, action) => {
  switch(action.type){
    case CALL_WHETHER:
      return {...state, directions: action.directions };
    case SET_PLACES:
      return {...state, origin: action.origin, destination: action.destination };
    case 'GET_WHETHER_DATA_RECEIVED':
      let data = action.data.data;
      return {...state, directions: data.directions, waypoints: data.equidistant_markers };
    default:
      return state;
  }
}

export default whetherApp;
