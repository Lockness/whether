import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import whetherApp from './redux/reducers';
import Whether from './Whether';
import whetherService from './services/whetherService';
import './App.css';

const App = (props) => {

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;

  const enhancer = composeEnhancers(
    applyMiddleware(whetherService)
  );

  const store = createStore(
    whetherApp,
    enhancer
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
