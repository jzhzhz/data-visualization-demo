import switchReducer from './switch';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  display: switchReducer,
});

export default allReducers;