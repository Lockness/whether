import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import './Whether.css';

import React, { Component } from 'react';

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


class Whether extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <Navbar/>
        </Header>
        <Layout className="whether-body">
          <Content>
            <HomePage/>
          </Content>
        </Layout>
        <Footer>
        </Footer>
      </Layout>
    );
  }
}

export default Whether;
