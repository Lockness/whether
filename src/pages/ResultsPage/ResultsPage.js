'use-strict';

import React from 'react';
import { Row, Col, Spin } from 'antd';
import { connect } from 'react-redux';

import Map from './Map';
import WeatherPoints from './WeatherPoints';
import './ResultsPage.less';

const ResultsPage = ({origin, destination, directions, waypoints}) => {
  if (waypoints) {
    return (
      <div id='results'>
        <h1>Heres the weather for the trip</h1>
        <p>Starting in {origin} and finishing in {destination}</p>
        <Row>
          <Col span={12} order={1}>
            <Map waypoints={waypoints}/>
          </Col>
          <Col span={12} order={2}> 
            <WeatherPoints
              waypoints={waypoints}
              directions={directions}
            />
          </Col>
        </Row>
      </div>
    );
  } else {
      return <Spin/>
  }
}

const mapStateToProps = (state, props) => 
({
  origin: state.origin,
  destination: state.destination,
  directions: state.directions,
  waypoints: state.waypoints
})

export default connect(mapStateToProps)(ResultsPage);
