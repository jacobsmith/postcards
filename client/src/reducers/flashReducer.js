import {
  FLASH_MESSAGE_ADDED,
  CLEAR_FLASH
} from './../actions/flashActions.js';

export default function flashReducer(state = {}, action) {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case FLASH_MESSAGE_ADDED:
      newState.level   = action.payload.level
      newState.message = action.payload.message

      return newState;
    case CLEAR_FLASH:
      newState.level   = undefined;
      newState.message = undefined;

      return newState;
    default:
      return newState;
  }
}
