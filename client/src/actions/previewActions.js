import * as actions from './actionTypes.js';
import customFetch from './../helpers/customFetch.js';

export function previewPostcard(postcard) {
  return function(dispatch) {
    customFetch('/api/postcards/preview', {
      method: 'post',
      body: JSON.stringify({
        photoId: postcard.photo.photoId,
        message: postcard.message.value,
        font:    postcard.message.font,
        fontSize:postcard.message.fontSize,
        address: postcard.addresses
      })
    })
    .then(data => dispatch(postcardPreviewReceived(data.front, data.back, data.postcard_id)))
    .catch(err => dispatch(postcardPreviewError(err)))

    dispatch(fetchingPostcardPreview())
  }
}

function fetchingPostcardPreview() {
  return {
    type: actions.FETCHING_POSTCARD_PREVIEW
  }
}

function postcardPreviewReceived(frontImg, backImg, postcardId) {
  return {
    type: actions.POSTCARD_PREVIEW_RECEIVED,
    payload: {
      frontImage: frontImg,
      backImage: backImg,
      postcardId: postcardId
    }
  }
}

function postcardPreviewError(err) {
  return {
    type: actions.POSTCARD_PREVIEW_ERROR,
    payload: {
      errorMessage: err
    }
  }
}
