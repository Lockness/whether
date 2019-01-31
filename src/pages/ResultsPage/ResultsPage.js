'use-strict';

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import { callWhether } from '../../services/awsService';
import Map from './Map';
import WeatherPoints from './WeatherPoints';
import './ResultsPage.less';

class ResultsPage extends Component {
  render() {
    return (
      !this.props.waypoints ? (<p>loading</p>) :
      <div id='results'>
        <h1>Heres the weather for the trip</h1>
        <p>Starting in {this.props.origin} and finishing in {this.props.destination}</p>
        <Row>
          <Col span={12} order={1} >
            <Map waypoints={this.props.waypoints}/>
          </Col>
          <Col span={12} order={2} > 
            <WeatherPoints
              waypoints={this.props.waypoints}
              directions={this.props.directions}
            />
          </Col>
        </Row>
      </div>
    );
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
