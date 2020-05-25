import * as types from './actionTypes';
import { places, whether } from './reducers';

describe('reducer', () => {
  describe('for places', () => {
    it('should return initial state', () => {
      expect(places(undefined, {})).toEqual({
        origin: '',
        destination: ''
      });
    });

    it('should handle SET_PLACES with empty state', () => {
      const action = {
        type: types.SET_PLACES,
        origin: 'ORIGIN',
        destination: 'DESTINATION'
      };
      expect(places({}, action)).toEqual({
        origin: 'ORIGIN',
        destination: 'DESTINATION'
      });
    });

    it('should handle SET_PLACES by overriding non-empty state', () => {
      const action = {
        type: types.SET_PLACES,
        origin: 'ORIGIN',
        destination: 'DESTINATION'
      };
      const existingState = {
        origin: 'OLD_ORIGIN',
        destination: 'OLD_DESTINATION'
      };
      expect(places(existingState, action)).toEqual({
        origin: 'ORIGIN',
        destination: 'DESTINATION'
      });
    });
  });

  describe('for whether', () => {
    const initialWhetherState = {
      isFetching: false,
      hasErrored: false,
      polyline: undefined,
      waypoints: undefined
    };

    it('should return initial state', () => {
      expect(whether(undefined, {})).toEqual(initialWhetherState);
    });

    it('should handle GET_WHETHER_DATA', () => {
      const action = {
        type: types.GET_WHETHER_DATA
      };
      expect(whether({}, action)).toEqual({
        ...initialWhetherState,
        isFetching: true
      });
    });

    it('should handle GET_WHETHER_DATA_RECEIEVED', () => {
      const polyline = 'polyline';
      const waypoints = [{}, {}];
      const action = {
        type: types.GET_WHETHER_DATA_RECEIVED,
        polyline,
        waypoints
      };
      expect(whether({}, action)).toEqual({
        ...initialWhetherState,
        isFetching: false,
        polyline,
        waypoints
      });
    });

    it('should handle GET_WHETHER_DATA_RECEIEVED', () => {
      const action = {
        type: types.GET_WHETHER_DATA_ERROR
      };
      expect(whether({}, action)).toEqual({
        ...initialWhetherState,
        isFetching: false,
        hasErrored: true
      });
    });
  });
});
