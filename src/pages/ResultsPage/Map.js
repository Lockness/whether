import React from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import styled from 'styled-components';

import MapMarkerUrl from './marker-15.svg';

const addPolylineToMap = (map, polyline) => {
  const decodedPoints = google.maps.geometry.encoding.decodePath(polyline);
  const encodedPolyline = new google.maps.Polyline({
    strokeColor: '#1E6AD4',
    strokeOpacity: 0.7,
    strokeWeight: 4,
    path: decodedPoints,
    clickable: false
  });
  encodedPolyline.setMap(map);
};

const addMarkersToMap = (map, waypoints) => {
  const image = {
    url: MapMarkerUrl,
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(14, 23)
  };
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  waypoints.forEach(waypoint => {
    const position = { lat: waypoint.lat, lng: waypoint.lng };
    const marker = new google.maps.Marker({
      position,
      icon: image,
      title: 'hello',
      shape
    });
    marker.setMap(map);
  });
};

const loadMap = (waypoints, polyline) => {
  /* global google */
  const midWaypoint = waypoints[Math.floor(waypoints.length / 2)];
  const center = { lat: midWaypoint.lat, lng: midWaypoint.lng };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center
  });
  addPolylineToMap(map, polyline);
  addMarkersToMap(map, waypoints);
};

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const MapDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const Map = ({ waypoints, polyline }) => (
  <React.Fragment>
    <Script
      url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBE4ui6NqI3DkVOY5iMZX6oUp1xoseJYA&libraries=geometry"
      onLoad={() => loadMap(waypoints, polyline)}
    />
    <MapContainer>
      <MapDiv id="map" />
    </MapContainer>
  </React.Fragment>
);
Map.propTypes = {
  waypoints: PropTypes.arrayOf(
    PropTypes.shape({
      arrival_time: PropTypes.number,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      weather_data: PropTypes.object
    })
  ),
  polyline: PropTypes.string
};

export default Map;
