'use-strict';

import MainSearch from './MainSearch/MainSearch';
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class ResultsPage extends Component {

  state = {
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <Row>
        <Col span={12} offset={6}>
          <h1>Whether</h1>
          <p>A place to get weather information on a trip</p>
          <MainSearch/>
        </Col>
      </Row>
    );
  }
}

export default ResultsPage;
