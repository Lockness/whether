import axios from 'axios';

const baseUrl = 'https://api.whether.cloud/beta';

const config = {
  headers: {
    'x-api-key': 'AIzaSyAjwY479M3V-JPlVbrVHKH9QPtpwGuHg10'
  }
};

const whetherService = (origin, destination, waypointDistance) => {
  const whetherUrl = `${baseUrl}?origin=${origin}&destination=${destination}&marker_distance=${waypointDistance}`;

  return axios.get(whetherUrl, config);
};

export default whetherService;
