import * as actions from './../actions/actionTypes.js';
import { CREATE_NEW_POSTCARD } from '../actions/postcardActions';


export default function postcardPreviewReducer(state = {}, action) {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case actions.POSTCARD_PREVIEW_RECEIVED:
      newState.fetchingPostcard = false;
      newState.frontImage = action.payload.frontImage
      newState.backImage = action.payload.backImage
      newState.postcardId = action.payload.postcardId

      return newState;
    case actions.FETCHING_POSTCARD_PREVIEW:
      newState.fetchingPostcard = true;
      return newState;
    case actions.POSTCARD_PREVIEW_ERROR:
      newState.fetchingPostcard = false;
      newState.errorDuringFetch = true;
      return newState;
    case actions.RESET_PREVIEW_STATE:
      newState.errorDuringFetch = false;
      newState.fetchingPostcard = false;
      return newState;
    case CREATE_NEW_POSTCARD:
      newState.fetchingPostcard = false;
      newState.errorDuringFetch = false;
      newState.frontImage = null;
      newState.backImage = null;
      newState.postcardId = null;
      return newState;
    default:
      return newState;
  }
}
