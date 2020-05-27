import * as actions from './actions';
import * as types from './actionTypes';

describe('redux actions', () => {
  describe('for places', () => {
    describe('setPlaces', () => {
      it('creates an action to set origin and destination', () => {
        const origin = 'Origin';
        const destination = 'Destination';
        const expectedAction = {
          type: types.SET_PLACES,
          origin,
          destination
        };

        expect(actions.setPlaces(origin, destination)).toEqual(expectedAction);
      });
    });
  });

  describe('for whether', () => {
    describe('getWhetherData', () => {
      it('creates an action to query whether data', () => {
        const expectedAction = {
          type: types.GET_WHETHER_DATA
        };

        expect(actions.getWhetherData()).toEqual(expectedAction);
      });
    });

    describe('getWhetherDataReceived', () => {
      it('creates an action to query whether data', () => {
        const polyline = 'polyline';
        // eslint-disable-next-line camelcase
        const waypoints = [{}];
        const response = {
          data: {
            polyline,
            equidistant_markers: waypoints
          }
        };
        const expectedAction = {
          type: types.GET_WHETHER_DATA_RECEIVED,
          polyline,
          waypoints
        };

        expect(actions.getWhetherDataReceived(response)).toEqual(expectedAction);
      });
    });

    describe('getWhetherDataError', () => {
      it('creates an action to query whether data', () => {
        const response = {
          data: {}
        };
        const error = 'Error';
        const expectedAction = {
          type: types.GET_WHETHER_DATA_ERROR,
          error
        };

        expect(actions.getWhetherDataError(response, error)).toEqual(expectedAction);
      });
    });
  });
});
