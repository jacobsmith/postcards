import initialState from './initialState.js';
import { MESSAGE_UPDATED } from  '../actions/actionTypes.js';

export default function postcardMessageReducer(state = { message: ''}, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case MESSAGE_UPDATED:
      console.log('message updated in reducer', action)
      newState.message = action.payload.text;
      return newState;
    default:
      return newState;
  }
}
