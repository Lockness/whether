import React from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';

import StyledInput from '../../components/StyledInput';

class PlacesPicker extends React.Component {
  constructor(props) {
    super(props);

    this.destinationInputRef = React.createRef();
  }

  handleScriptLoad = () => {
    /* global google */
    const origin = document.getElementById('origin');
    const destination = document.getElementById('destination');
    this.originAutocomplete = new google.maps.places.Autocomplete(origin);
    this.destinationAutocomplete = new google.maps.places.Autocomplete(destination);

    this.originAutocomplete.addListener('place_changed', this.handleOriginSelect);
    this.destinationAutocomplete.addListener('place_changed', this.handleDestinationSelect);

    google.maps.event.addDomListener(origin, 'keydown', event => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
    google.maps.event.addDomListener(destination, 'keydown', event => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
  };

  handleOriginSelect = () => {
    const addressObject = this.originAutocomplete.getPlace();

    if (addressObject && addressObject.formatted_address) {
      const origin = {
        address: addressObject.formatted_address,
        lat: addressObject.geometry.location.lat(),
        lng: addressObject.geometry.location.lng()
      };
      this.props.setOrigin(origin);
    }
    this.destinationInputRef.current.focus();
  };

  handleDestinationSelect = () => {
    const addressObject = this.destinationAutocomplete.getPlace();

    if (addressObject && addressObject.formatted_address) {
      const destination = {
        address: addressObject.formatted_address,
        lat: addressObject.geometry.location.lat(),
        lng: addressObject.geometry.location.lng()
      };
      this.props.setDestination(destination);
    }
  };

  render() {
    return (
      <>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjwY479M3V-JPlVbrVHKH9QPtpwGuHg10&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <StyledInput label="Coming From:" id="origin" />
        <StyledInput label="Going To:" id="destination" ref={this.destinationInputRef} />
      </>
    );
  }
}
PlacesPicker.propTypes = {
  setOrigin: PropTypes.func,
  setDestination: PropTypes.func
};

export default PlacesPicker;
