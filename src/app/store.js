import {createStore, compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const middleware = [
  ReduxThunk,
  process.env.NODE_ENV === 'development' && logger,
].filter(Boolean);
const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(...middleware)),
);

export default store;
