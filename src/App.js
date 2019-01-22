import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Whether from './Whether';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="whether">
        <Router>
          <Whether/>
        </Router>
      </div>
    );
  }
}

export default App;
