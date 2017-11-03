import { combineReducers } from 'redux';
import postcardMessageReducer from './postcardMessageReducer.js';
import addressesReducer from './addressesReducer.js';
import photoReducer from './photoReducer.js';
import userReducer from './userReducer.js';
import postcardPreviewReducer from './postcardPreviewReducer.js';

// might need to nest everything under a global 'postcard' reducer for things related to the actual postcard (?)

const rootReducer = combineReducers({
  postcard: combineReducers({
    message: postcardMessageReducer,
    addresses: addressesReducer,
    photo: photoReducer
  }),
  postcardPreview: postcardPreviewReducer,
  user: userReducer
})

export default rootReducer;
