'use-strict';

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import { callWhether } from '../../services/awsService';
import Map from './Map';
import WeatherPoints from './WeatherPoints';
import './ResultsPage.less';

class ResultsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    //TESTING DATA
    let o = this.props.origin || 'greensboro, nc';
    let d = this.props.destination || 'columbus, oh';
    callWhether(o, d)
      .then(data => this.setState(data));
  }

  render() {
    return (
      <div id='results'>
        <h1>Heres the weather for the trip</h1>
        <p>Starting in {this.props.origin} and finishing in {this.props.destination}</p>
        <Row>
          <Col span={12} order={1} >
            <Map />
          </Col>
          <Col span={12} order={2} > 
            <WeatherPoints />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  origin: state.origin,
  destination: state.destination
})

export default connect(mapStateToProps)(ResultsPage);
