import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';

import home from './data/home/reducer';

const rootReducer = combineReducers({
  home,
  routing: routerReducer
});

const routeMiddleware = routerMiddleware(browserHistory);

const middleware = applyMiddleware(thunkMiddleware, routeMiddleware);

const store = createStore(rootReducer, middleware);

export default store;
