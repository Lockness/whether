import whetherService from "../services/whetherService";

//Places Actions
export const SET_PLACES = "SET_PLACES";
export const setPlaces = (origin, destination) => {
  return {
    type: SET_PLACES,
    origin,
    destination
  };
};

//Whether Actions
export const GET_WHETHER_DATA = "GET_WHETHER_DATA";
export const getWhetherData = (origin, destination) => {
  return {
    type: GET_WHETHER_DATA,
    origin,
    destination
  };
};

export const GET_WHETHER_DATA_RECEIVED = "GET_WHETHER_DATA_RECEIVED";
export const getWhetherDataReceived = response => {
  console.log(response);
  const data = response.data;
  const polyline = data.polyline;
  const waypoints = data.equidistant_markers;
  return {
    type: GET_WHETHER_DATA_RECEIVED,
    polyline,
    waypoints
  };
};

export const GET_WHETHER_DATA_ERROR = "GET_WHETHER_DATA_ERROR";
export const getWhetherDataError = (response, error) => {
  return {
    type: GET_WHETHER_DATA_ERROR,
    error
  };
};

//Thunk Actions
export const fetchWhether = (origin, destination) => {
  return dispatch => {
    dispatch(getWhetherData(origin, destination));

    return whetherService(origin, destination).then(
      response => dispatch(getWhetherDataReceived(response)),
      error => console.log("An error occured.", error) //Can't use catch
    );
  };
};
