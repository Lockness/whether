import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './redux/reducers';
import Whether from './Whether';

const App = props => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(rootReducers, enhancer);

  return (
    <div className="text-white font-semibold">
      <Provider store={store}>
        <Router>
          <Whether />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
