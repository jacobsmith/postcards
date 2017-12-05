import customFetch from './../helpers/customFetch.js';

export const SIGNUP_VALUE_CHANGED = 'SIGNUP_VALUE_CHANGED';
export const SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL';
export const SIGNUP_NOT_SUCCESSFUL = 'SIGNUP_NOT_SUCCESSFUL';

export function signupValueChanged(field, value) {
  return {
    type: SIGNUP_VALUE_CHANGED,
    payload: {
      field: field,
      value: value
    }
  }
}

export function signUp(email, password, passwordConfirmation) {
  return function(dispatch) {
    fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ email: email, password: password, passwordConfirmation: passwordConfirmation })
    }).then(response => {
      let status = response.status
      response.json().then(json => dispatch(handleSignupResponse(status, json)))
    })
  }
}

function handleSignupResponse(status, json) {
  if (status === 200) {
    if (json.errors) {
      return {
        type: SIGNUP_NOT_SUCCESSFUL,
        payload: {
          errors: json.errors
        }
      }
    } else {
      window.localStorage.setItem('postcardToken', json.token)

      return {
        type: SIGNUP_SUCCESSFUL
      }
    }
  } else {

    return {
      type: SIGNUP_NOT_SUCCESSFUL,
      payload: {
        errors: "Something went wrong. Please try again!"
      }
    }

  }
}
