import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class Whether extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route
          exact
          path='/'
          component={HomePage}
        />
        <Route
          path='/whether'
          component={ResultsPage}
        />
      </React.Fragment>
    );
  }
}

export default Whether;
