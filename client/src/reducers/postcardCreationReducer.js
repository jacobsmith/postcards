import {
  POSTCARD_CREATED_SUCCESSFULLY,
  POSTCARD_CREATION_ERROR
} from './../actions/postcardActions.js';

let initialState = {};

export default function postcardCreationReducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case POSTCARD_CREATED_SUCCESSFULLY:
      newState.postcardCreatedSuccessfully = true;
      return newState;
    case POSTCARD_CREATION_ERROR:
      newState.postcardCreatedSuccessfully = false;
      return newState;
    default:
      return newState;
  }
}
