import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import whetherApp from './redux/reducers';
import Whether from './Whether';
import './App.css';

const App = (props) => {

  const store = createStore(
    whetherApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //For redux tools
  );

  return (
    <div className="whether">
      <Provider
        store={store}
      >
        <Router>
          <Whether/>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
