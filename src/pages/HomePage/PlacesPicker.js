import React from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import styled from 'styled-components';

const PlaceHeader = styled.h2`
  font-size: 1.125rem;
  text-align: left;
  margin-left: 0.5rem;
`;

const PlaceInput = React.forwardRef(({ id, label, className }, ref) => (
  <React.Fragment>
    <PlaceHeader>{label}</PlaceHeader>
    <input id={id} className={className} ref={ref} />
  </React.Fragment>
));
PlaceInput.displayName = 'PlaceInput';
PlaceInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

const StyledPlaceInput = styled(PlaceInput)`
  padding: 1rem;
  margin: 0.25rem 0.25rem 0.75rem 0.25rem;
  font-weight: 700;
  border-radius: 0.5rem;
  color: #6574cd;
  width: 100%;
`;

const PlacesInputContainer = styled.div`
  margin: auto;
  diplay: flex;
  flex: 0 1 auto;
  justify-content: center;
  flex-direction: column;
  width: 70%;

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const PlacesInput = React.forwardRef((_, ref) => (
  <PlacesInputContainer>
    <StyledPlaceInput id="origin" label="Coming From:" />
    <StyledPlaceInput label="Going To:" id="destination" ref={ref} />
  </PlacesInputContainer>
));
PlacesInput.displayName = 'PlacesInput';

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
      this.props.setOrigin(addressObject.formatted_address);
    }
    this.destinationInputRef.current.focus();
  };

  handleDestinationSelect = () => {
    const addressObject = this.destinationAutocomplete.getPlace();

    if (addressObject && addressObject.formatted_address) {
      this.props.setDestination(addressObject.formatted_address);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBE4ui6NqI3DkVOY5iMZX6oUp1xoseJYA&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <PlacesInput ref={this.destinationInputRef} />
      </React.Fragment>
    );
  }
}

PlacesPicker.propTypes = {
  setOrigin: PropTypes.func,
  setDestination: PropTypes.func
};

export default PlacesPicker;
