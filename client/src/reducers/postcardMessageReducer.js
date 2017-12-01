import {
   MESSAGE_UPDATED,
   FONT_UPDATED,
   FONT_SIZE_UPDATED
  } from  '../actions/actionTypes.js';
import { CREATE_NEW_POSTCARD } from '../actions/postcardActions';

export default function postcardMessageReducer(state = { value: '', font: 'Amatic SC', fontSize: 14 }, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case MESSAGE_UPDATED:
      newState.value = action.payload.text;
      return newState;
    case CREATE_NEW_POSTCARD:
      newState.value = '';
      return newState;
    case FONT_UPDATED:
      newState.font = action.payload.font;
      return newState;
    case FONT_SIZE_UPDATED:
      newState.fontSize = action.payload.fontSize;
      return newState;
    default:
      return newState;
  }
}
