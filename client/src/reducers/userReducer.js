import {
  USER_LOGGED_IN_SUCCESSFULLY
} from './../actions/userActions.js';

import {
  LOGIN_UPDATE_EMAIL,
  LOGIN_UPDATE_PASSWORD,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  USER_LOGGED_OUT
} from './../actions/loginActions.js';

let initialState = {
  login: {
    loggedIn: window.localStorage.getItem('postcardToken')
  }
}

function userReducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case USER_LOGGED_IN_SUCCESSFULLY:
      newState.email = action.payload.email
      newState.id = action.payload.id

      return newState;
    case LOGIN_UPDATE_EMAIL:
      newState.login.email = action.payload
      return newState;
    case LOGIN_UPDATE_PASSWORD:
      newState.login.password = action.payload;
      return newState;
    case LOGIN_SUCCESSFUL:
      newState.login.loggedIn = true;
      newState.login.errored = false;
      return newState;
    case LOGIN_UNSUCCESSFUL:
      newState.login.loggedIn = false;
      newState.login.errored = true;
      return newState;
    case USER_LOGGED_OUT:
      newState.login.loggedIn = false;
      return newState;
    default:
      return newState;
  }
}

export default userReducer;
