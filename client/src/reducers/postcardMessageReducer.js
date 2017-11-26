import { MESSAGE_UPDATED } from  '../actions/actionTypes.js';
import { CREATE_NEW_POSTCARD } from '../actions/postcardActions';

export default function postcardMessageReducer(state = { value: '' }, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case MESSAGE_UPDATED:
      newState.value = action.payload.text;
      return newState;
    case CREATE_NEW_POSTCARD:
      newState.value = '';
      return newState;
    default:
      return newState;
  }
}
