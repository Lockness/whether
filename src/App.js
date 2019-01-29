import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import whetherApp from './redux/reducers';
import Whether from './Whether';
import './App.css';

const App = (props) => {

  const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //For redux tools
  );

  const store = createStore(
    whetherApp,
    allStoreEnhancers
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
