import { MESSAGE_UPDATED } from  '../actions/actionTypes.js';

export default function postcardMessageReducer(state = { value: '' }, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case MESSAGE_UPDATED:
      newState.value = action.payload.text;
      return newState;
    default:
      return newState;
  }
}
