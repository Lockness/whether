import React from 'react';
import PropTypes from 'prop-types';

import Script from 'react-load-script';

class Map extends React.Component {

  handleScriptLoad = () => {
    /*global google*/
    
    let columbus = {lat: 40.0016, lng: -83.0197};
    let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center: columbus}
    );
    let marker = new google.maps.Marker({position: columbus, map: map});
  }

  render() {
    return (
      <React.Fragment>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBE4ui6NqI3DkVOY5iMZX6oUp1xoseJYA"
          onLoad={this.handleScriptLoad}
        />
        <div style={{height: '400px', width: '100%'}}>
          <div id='map' style={{height: '100%', width: '100%'}}></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Map;
