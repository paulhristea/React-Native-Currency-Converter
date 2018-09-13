import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import config from './config';
import reducers from '../reducers';
import rootSaga from './sagas';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
export const addListener = createReduxBoundAddListener('root');

const sagaMiddleware = createSagaMiddleware();

const middleware = [navMiddleware, sagaMiddleware];

if (process.env.NODE_ENV === 'development' && config.enableLogging) {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
