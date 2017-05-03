import { combineReducers } from 'redux';
import { reducer as users } from './users/reducer';

const reducers = combineReducers({
  users
});

export default reducers;
