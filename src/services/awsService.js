import axios from 'axios';

const baseUrl = 'https://api.whether.cloud/beta/';

export const callWhether = (origin, destination) => {
  if (!origin || !destination)
    throw new Error('Must have an origin and destination');

  let _origin = encodeURIComponent(origin);
  let _destination = encodeURIComponent(destination);
  let whetherUrl = baseUrl + 'directions';

  let data = {
    origin: _origin,
    destination: _destination
  };

  let config = {
    headers: {
      'x-api-key': 'BYi5MaSB1IaFAyUDbaIaMa25mmdyhngK3H4WENXe'
    }
  };

  return axios.post(whetherUrl, data, config);
};
