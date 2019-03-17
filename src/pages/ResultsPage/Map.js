import React from 'react';
import PropTypes from 'prop-types';

import Script from 'react-load-script';

const Map = ({waypoints}) => {

  const handleScriptLoad = () => {
    /*global google*/
    let midWaypoint = waypoints[Math.floor(waypoints.length / 2)]
    let center = {lat: midWaypoint.lat, lng: midWaypoint.lng};
    let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center}
    );
    waypoints.forEach((waypoint) => {
      let position = {lat: waypoint.lat, lng: waypoint.lng};
      new google.maps.Marker({position, map: map});
    });
  }

  return (
    <React.Fragment>
      <Script
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBE4ui6NqI3DkVOY5iMZX6oUp1xoseJYA"
        onLoad={handleScriptLoad}
      />
      <div className="h-full w-full" >
        <div id='map' className='h-full w-full'></div>
      </div>
    </React.Fragment>
  )
}

Map.propTypes = {
  waypoints: PropTypes.arrayOf(
    PropTypes.shape(
      {
        arrival_time: PropTypes.number,
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
        weather_data: PropTypes.object
      }
    )
  )
};

export default Map;
