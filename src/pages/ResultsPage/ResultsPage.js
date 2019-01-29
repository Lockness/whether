'use-strict';

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import { callWhether } from '../../services/awsService';
import Map from './Map';

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
      <Row>
        <Col span={12} offset={6}>
          <h1>RESULTS</h1>
          <p>Hey Sara</p>
          <Map />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, props) => ({
  origin: state.origin,
  destination: state.destination
})

export default connect(mapStateToProps)(ResultsPage);
