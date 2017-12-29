import {
  POSTCARD_CREATED_SUCCESSFULLY,
  POSTCARD_CREATION_ERROR,
  CREATE_NEW_POSTCARD,
  CREATING_POSTCARD
} from './../actions/postcardActions.js';

import {
  RESET_PREVIEW_STATE
} from './../actions/actionTypes.js';

let initialState = {};

export default function postcardCreationReducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case POSTCARD_CREATED_SUCCESSFULLY:
      newState.creatingPostcard = false;
      newState.postcardCreatedSuccessfully = true;
      return newState;
    case POSTCARD_CREATION_ERROR:
      newState.creatingPostcard = false;
      newState.postcardCreatedSuccessfully = false;
      return newState;
    case RESET_PREVIEW_STATE:
      // allow changes to be made and then maybe it will have been fixed
      newState.postcardCreatedSuccessfully = undefined;
      return newState;
    case CREATE_NEW_POSTCARD:
      newState.creatingPostcard = false;
      newState.postcardCreatedSuccessfully = null;
      return newState;
    case CREATING_POSTCARD:
      newState.creatingPostcard = true;
      return newState;
    default:
      return newState;
  }
}
