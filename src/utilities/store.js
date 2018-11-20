import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';

const defaultState = {
  credentials: null,
  claim: null,
  transaction: null,
  isSubmitting: false
};

const store = createStore(
  reducers,
  defaultState,
  applyMiddleware(thunk, logger)
);

export default store;
