import { combineReducers } from 'redux';
import postcardMessageReducer from './postcardMessageReducer.js';
import addressesReducer from './addressesReducer.js';
import photoReducer from './photoReducer.js';
import userReducer from './userReducer.js';
import postcardPreviewReducer from './postcardPreviewReducer.js';
import dropdownReducer from './dropdownReducer.js';
import postcardCreationReducer from './postcardCreationReducer.js';


const rootReducer = combineReducers({
  postcard: combineReducers({
    message: postcardMessageReducer,
    addresses: addressesReducer,
    photo: photoReducer
  }),
  postcardPreview: postcardPreviewReducer,
  postcardCreation: postcardCreationReducer,
  user: userReducer,
  dropdowns: dropdownReducer
})

export default rootReducer;
