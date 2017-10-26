import {
  IMAGE_UPLOAD_BEGIN,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE
} from './actionTypes.js';

import customFetch from './../helpers/customFetch.js';

export function uploadPhoto(file) {
  return function(dispatch) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function(event) {
      let photoObject = {
        imgSrc: reader.result,
        imgName: file.name
      }

      customFetch(`/api/photos`, {
        method: 'post',
        body: JSON.stringify(photoObject)
      })
      .then((response) => {
        dispatch(imageUploadSuccess(response.photo.data, response.id))
      })
      .catch((error) => dispatch(imageUploadFailure()));
    };

    return {
      type: 'NOP'
    }
  }
}

export function notifyUserOfUpdate() {
  return {
    type: IMAGE_UPLOAD_BEGIN
  }
}
export function imageUploadSuccess(imgData, photoId) {
  return {
    type: IMAGE_UPLOAD_SUCCESS,
    payload: {
      imageData: imgData,
      photoId: photoId
    }
  }
}

export function imageUploadFailure() {
  return {
    type: IMAGE_UPLOAD_FAILURE
  }
}
