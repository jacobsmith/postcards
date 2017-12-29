import {
  IMAGE_UPLOAD_BEGIN,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE,
} from  '../actions/actionTypes.js';

import {
  CREATE_NEW_POSTCARD
} from '../actions/postcardActions';

let initialState = {
  imgSrc: ''
}

export default function photo(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_POSTCARD:
      return {
        ...state,
        imgSrc: null,
        photoId: null,
        uploadInProgress: false
      }
    case IMAGE_UPLOAD_BEGIN:
      return { ...state, uploadInProgress: true }
    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        imgSrc: action.payload.imageData,
        photoId: action.payload.photoId,
        uploadInProgress: false
      }
    case IMAGE_UPLOAD_FAILURE:
      return { ...state, uploadInProgress: false, failedUpload: true}
    default:
      return state;
  }
}
