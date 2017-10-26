import { combineReducers } from 'redux';
import postcardMessageReducer from './postcardMessageReducer.js';
import addressesReducer from './addressesReducer.js';
import photoReducer from './photoReducer.js';

// might need to nest everything under a global 'postcard' reducer for things related to the actual postcard (?)

const rootReducer = combineReducers({
  postcardMessage: postcardMessageReducer,
  addresses: addressesReducer,
  photo: photoReducer,
})

export default rootReducer;
