import initialState from './initialState.js';
import { TEST } from  '../actions/actionTypes.js';

export default function testReducer(state = initialState.test, action) {
  let newState;
  switch (action.type) {
    case TEST:
      console.log('test recieved!');
      newState = action.text
      return newState;
    default:
      return state;
  }
}
