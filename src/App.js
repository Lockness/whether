import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './redux/reducers';
import Whether from './Whether';
import BaseStyles from './BaseStyles';

const App = () => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) // eslint-disable-line no-underscore-dangle
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(rootReducers, enhancer);

  return (
    <React.Fragment>
      <BaseStyles />
      <Provider store={store}>
        <Router>
          <Whether />
        </Router>
      </Provider>
    </React.Fragment>
  );
};

export default App;
