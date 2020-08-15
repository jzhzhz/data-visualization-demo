import switchReducer from './switch';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  display: switchReducer,
  isLogged: loggedReducer,
});

export default allReducers;