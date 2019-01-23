import axios from 'axios';

const baseUrl = 'https://osjmxav54i.execute-api.us-east-1.amazonaws.com/beta/';

export const callWhether = (origin, destination) => {
  if (!origin || !destination)
    throw new Error('Must have an origin and destination');

  let _origin = encodeURIComponent(origin);
  let _destination = encodeURIComponent(destination);
  let whetherUrl = baseUrl + 'whether?origin=' + _origin + '&destination=' + _destination;

  return axios.get(whetherUrl)
}
