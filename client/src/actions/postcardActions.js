export const POSTCARD_CREATED_SUCCESSFULLY = 'POSTCARD_CREATED_SUCCESSFULLY';
export const POSTCARD_CREATION_ERROR = 'POSTCARD_CREATION_ERROR';

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
