export const SET_PLACES = 'SET_PLACES';
export const CALL_WHETHER = 'CALL_WHETHER';

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

