import customFetch from './../helpers/customFetch.js';

export const LOGIN_UPDATE_EMAIL = 'LOGIN_UPDATE_EMAIL';
export const LOGIN_UPDATE_PASSWORD = 'LOGIN_UPDATE_PASSWORD';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_UNSUCCESSFUL = 'LOGIN_UNSUCCESSFUL';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export function updateEmail(event) {
  return {
    type: LOGIN_UPDATE_EMAIL,
    payload: event.target.value
  }
}

export function updatePassword(event) {
  return {
    type: LOGIN_UPDATE_PASSWORD,
    payload: event.target.value
  }
}

export function logOut() {
  return function(dispatch) {
    customFetch('/api/sessions', {
      method: 'delete'
    }).then(response => dispatch(userLoggedOut()))
  }
}

export function userLoggedOut() {
  window.localStorage.setItem('postcardToken', '');

  return {
    type: USER_LOGGED_OUT
  }
}

export function login(email, password) {
  return function(dispatch) {
    fetch('/api/sessions', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ email: email, password: password })
    })
    .then(response => {
      let status = response.status;
      response.json().then(json => dispatch(loginResponseReceived(status, json)))
    })
  }
}

function loginResponseReceived(status, json) {
  if (status === 200) {
    window.localStorage.setItem('postcardToken', json.token)

    return {
      type: LOGIN_SUCCESSFUL,
      payload: {
        credits: json.credits,
      }
    }
  } else {
    return {
      type: LOGIN_UNSUCCESSFUL
    }
  }
}
