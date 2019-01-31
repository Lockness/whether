import axios from 'axios';

export const getWhetherData = (origin, destination) => {
  return {
    type: 'GET_WHETHER_DATA',
    payload: {
      origin,
      destination
    }
  }
};

const baseUrl = 'https://api.whether.cloud/beta';

const config = {
  headers: {
    'x-api-key': 'BYi5MaSB1IaFAyUDbaIaMa25mmdyhngK3H4WENXe'
  }
};

const whetherService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'GET_WHETHER_DATA':
      let origin = action.payload.origin;
      let destination = action.payload.destination;
      let whetherUrl = baseUrl + '?origin=' + origin + '&destination=' + destination;

      axios.get(whetherUrl, config).then(data => {
        next({
          type: 'GET_WHETHER_DATA_RECEIVED',
          data
        });
      });
      break;

    default:
      break
  }
}

export default whetherService;
