import { CALL_WHETHER } from './actions';

const whetherApp = (state = {}, action) => {
  switch(action.type){
    case CALL_WHETHER:
      return {...state, directions: action.directions } ;
    default:
      return state;
  }
}

export default whetherApp;
