export const POSTCARD_CREATED_SUCCESSFULLY = 'POSTCARD_CREATED_SUCCESSFULLY';
export const POSTCARD_CREATION_ERROR = 'POSTCARD_CREATION_ERROR';
export const CREATE_NEW_POSTCARD = 'CREATE_NEW_POSTCARD';
export const CREATING_POSTCARD = 'CREATING_POSTCARD';

export function createNewPostcard() {
  return {
    type: CREATE_NEW_POSTCARD
  }
}

export function creatingPostcard() {
  return {
    type: CREATING_POSTCARD
  }
}

export function postcardCreated(response) {
  if (response.success == true) {
    return postcardCreatedSuccessfully();
  } else {
    return postcardCreationError();
  }
}

function postcardCreatedSuccessfully() {
  return {
    type: POSTCARD_CREATED_SUCCESSFULLY
  }
}

function postcardCreationError() {
  return {
    type: POSTCARD_CREATION_ERROR
  }
}
