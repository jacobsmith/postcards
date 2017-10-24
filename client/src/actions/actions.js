import * as actions from './actionTypes.js';

export function testAction(arg = "hey") {
  return {
    type: actions.TEST,
    text: arg
  }
}

export function messageUpdated(event) {
  return {
    type: actions.MESSAGE_UPDATED,
    payload: {
      text: event.target.value
    }
  }
}
