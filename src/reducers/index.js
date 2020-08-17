import switchReducer from './switch';
import { combineReducers } from 'redux';

// use combine reducers in case of more reducers
const allReducers = combineReducers({
  display: switchReducer,
});

export default allReducers;