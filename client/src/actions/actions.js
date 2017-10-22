import * as actions from './actionTypes.js';

export function testAction(arg = "hey") {
  return {
    type: actions.TEST,
    text: arg
  }
}
