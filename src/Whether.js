import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import ResultsPage from './pages/ResultsPage/ResultsPage'

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class Whether extends Component {
  render() {
    return (
      <div className="h-screen8">
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/whether" component={ResultsPage} />
      </div>
    )
  }
}

export default Whether
