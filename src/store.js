import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './redux/reducer';

// const middlewares = [thunkMiddleware];

// if (process.env.NODE_ENV === 'development') {
//   const { logger } = require('redux-logger');

//   middlewares.push(logger);
// }

const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(reducer, middleware);

export default store;
