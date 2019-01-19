'use-strict';

import MainSearch from './MainSearch/MainSearch';
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class MainPage extends Component {

  state = {
    originLocation : '',
    destinationLocation : '',
    travelDate : this.getCurrentDate()
  };

  getCurrentDate() {
    const date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    return [
      year,
      '-',
      ( month > 9 ? month : '0' + month),
      '-',
      ( day > 9 ? day : '0' + day)
    ].join('');
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submit = () => {
  }

  render() {
    return (
      <Row>
        <Col span={12} offset={6} style={{'background-color': '@primary-color'}}>
          <h1>Whether</h1>
          <p>A place to get weather information on a trip</p>
          <MainSearch/>
        </Col>
      </Row>
    );
  }
}

export default MainPage;
