import { combineReducers } from 'redux';
import testReducer from './testReducer.js';
import postcardMessageReducer from './postcardMessageReducer.js';

const rootReducer = combineReducers({
  test: testReducer,
  postcardMessage: postcardMessageReducer
})

export default rootReducer;
