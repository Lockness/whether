import React from 'react';
import PropTypes from 'prop-types';

import Script from 'react-load-script';

class PlacesPicker extends React.Component {


  handleScriptLoad = () => {
    /*global google*/

    this.originAutocomplete = new google.maps.places.Autocomplete(
      document.getElementById('origin')
    );
    this.destinationAutocomplete = new google.maps.places.Autocomplete(
      document.getElementById('destination')
    );

    this.originAutocomplete.addListener('place_changed', this.handleOriginSelect);
    this.destinationAutocomplete.addListener('place_changed', this.handleDestinationSelect);
  }

  handleOriginSelect = () => {
    let addressObject = this.originAutocomplete.getPlace();

    if (addressObject && addressObject.formatted_address) {
      this.props.setOrigin(addressObject.formatted_address);
    }
  }

  handleDestinationSelect = () => {
    let addressObject = this.destinationAutocomplete.getPlace();

    if (addressObject && addressObject.formatted_address) {
      this.props.setDestination(addressObject.formatted_address);
    }
  }

  render() {
    let { origin, destination, setOrigin, setDestination } = this.props;
    return (
      <React.Fragment>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBE4ui6NqI3DkVOY5iMZX6oUp1xoseJYA&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <div className="flex flex-col flex-initial justify-center xs:w-3/4 sm:w-1/2 lg:w-1/4 m-auto">
          <input
            id='origin'
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="p-4 m-1 shadow-md rounded-lg"
          />
          <input
            id='destination'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-4 m-1 shadow-md"
          />
        </div>
      </React.Fragment>
    );
  }
}

PlacesPicker.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  setOrigin: PropTypes.func,
  setDestination: PropTypes.func
};

export default PlacesPicker;
