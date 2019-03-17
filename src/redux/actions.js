export const SET_PLACES = 'SET_PLACES';
export const CALL_WHETHER = 'CALL_WHETHER';
export const GET_WHETHER_DATA = 'GET_WHETHER_DATA';
export const GET_WHETHER_DATA_RECEIVED = 'GET_WHETHER_DATA_RECEIVED';

export const callWhether = (origin, destination) => {
  return {
    type: CALL_WHETHER,
    origin,
    destination
  }
}

export const setPlaces = (origin, destination) => {
  return {
    type: SET_PLACES,
    origin,
    destination
  }
}

