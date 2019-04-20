import React from 'react';
import PropTypes from 'prop-types';

import Script from 'react-load-script';

const Map = ({waypoints, polyline}) => {

  const handleScriptLoad = () => {
    /*global google*/
    let midWaypoint = waypoints[Math.floor(waypoints.length / 2)]
    let center = {lat: midWaypoint.lat, lng: midWaypoint.lng};
    let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center}
    );
    var image = {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
    };
    var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
    };
    waypoints.forEach((waypoint) => {
      let position = {lat: waypoint.lat, lng: waypoint.lng};
      new google.maps.Marker(
        {
          position,
          icon: image,
          title: "hello",
          map: map,
          shape: shape
        }
      );
    });
    
    var decodedPoints = google.maps.geometry.encoding.decodePath(polyline)
    var encodedPolyline = new google.maps.Polyline({
      strokeColor: "#1E6AD4",
      strokeOpacity: 0.7,
      strokeWeight: 4,
      path: decodedPoints,
      clickable: false
    });
    encodedPolyline.setMap(map);
  }

  return (
    <React.Fragment>
      <Script
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBE4ui6NqI3DkVOY5iMZX6oUp1xoseJYA&libraries=geometry"
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
