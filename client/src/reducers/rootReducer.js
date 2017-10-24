import { combineReducers } from 'redux';
import testReducer from './testReducer.js';
import postcardMessageReducer from './postcardMessageReducer.js';
import addressesReducer from './addressesReducer.js';

const rootReducer = combineReducers({
  test: testReducer,
  postcardMessage: postcardMessageReducer,
  addresses: addressesReducer
})

export default rootReducer;
