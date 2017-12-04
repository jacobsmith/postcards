export const LOGIN_UPDATE_EMAIL = 'LOGIN_UPDATE_EMAIL';
export const LOGIN_UPDATE_PASSWORD = 'LOGIN_UPDATE_PASSWORD';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_UNSUCCESSFUL = 'LOGIN_UNSUCCESSFUL';

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

export function login(email, password) {
  return function(dispatch) {
    fetch('/api/sessions', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ email: email, password: password })
    })
    .then(response => dispatch(loginResponseReceived(response)))
  }
}

function loginResponseReceived(response) {
  if (response.status === 200) {

    response.json().then(json => window.localStorage.setItem('postcardToken', json.token))

    return {
      type: LOGIN_SUCCESSFUL
    }
  } else {
    return {
      type: LOGIN_UNSUCCESSFUL
    }
  }
}
