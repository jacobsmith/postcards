import {
  IMAGE_UPLOAD_BEGIN,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE,
} from  '../actions/actionTypes.js';

let initialState = {
  imgSrc: ''
}

export default function photo(state = initialState, action) {
  switch (action.type) {
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
