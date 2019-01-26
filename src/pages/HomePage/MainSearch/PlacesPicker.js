import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input } from 'antd';

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
      this.props.onChange('origin', addressObject.formatted_address);
    }
  }

  handleDestinationSelect = () => {
    let addressObject = this.destinationAutocomplete.getPlace();

    if (addressObject && addressObject.formatted_address) {
      this.props.onChange('destination', addressObject.formatted_address);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBE4ui6NqI3DkVOY5iMZX6oUp1xoseJYA&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <Form.Item label="Starting Location">
          <Input
            id='origin'
            name='origin'
            value={this.props.origin}
            onChange={(e) => this.props.onChange('origin', e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Destination">
          <Input
            id='destination'
            name='destination'
            value={this.props.destination}
            onChange={(e) => this.props.onChange('destination', e.target.value)}
          />
        </Form.Item>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBE4ui6NqI3DkVOY5iMZX6oUp1xoseJYA&libraries=places"
          onLoad={this.handleScriptLoad}
        />
      </React.Fragment>
    );
  }
}

PlacesPicker.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  onChange: PropTypes.func
};

export default PlacesPicker;
