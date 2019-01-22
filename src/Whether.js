import HomePage from './pages/HomePage/HomePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import Navbar from './components/Navbar/Navbar';
import './Whether.css';

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


class Whether extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <Navbar/>
        </Header>
        <Layout className='whether-body'>
          <Content>
            <Route
              exact
              path='/'
              component={HomePage}
            />
            <Route
              path='/whether'
              component={ResultsPage}
            />
          </Content>
        </Layout>
        <Footer>
        </Footer>
      </Layout>
    );
  }
}

export default Whether;
