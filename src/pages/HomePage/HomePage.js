'use-strict';

import MainSearch from './MainSearch/MainSearch';
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class HomePage extends Component {

  render() {
    return (
      <Row>
        <Col span={12} offset={6} style={{'backgroundColor': '@primary-color'}}>
          <h1>Whether</h1>
          <p>A place to get weather information on a trip</p>
          <MainSearch/>
        </Col>
      </Row>
    );
  }
}

export default HomePage;
