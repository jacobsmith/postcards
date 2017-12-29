import {
  USER_LOGGED_IN_SUCCESSFULLY,
  USER_FETCHED
} from './../actions/userActions.js';

import {
  LOGIN_UPDATE_EMAIL,
  LOGIN_UPDATE_PASSWORD,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  USER_LOGGED_OUT
} from './../actions/loginActions.js';

import {
  SIGNUP_VALUE_CHANGED,
  SIGNUP_SUCCESSFUL,
  SIGNUP_NOT_SUCCESSFUL
} from './../actions/signupActions.js';

let initialState = {
  loggedIn:               window.localStorage.getItem('postcardToken'),
  login: {
    email:                '',
    password:             '',
  },
  signup: {
    email:                '',
    password:             '',
    passwordConfirmation: ''
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
      newState.loggedIn = true;
      newState.login.errored = false;
      newState.credits = action.payload.credits;

      return newState;
    case LOGIN_UNSUCCESSFUL:
      newState.loggedIn = false;
      newState.login.errored = true;
      return newState;
    case USER_LOGGED_OUT:
      newState = initialState;
      return newState;
    case SIGNUP_VALUE_CHANGED:
      newState.signup[action.payload.field] = action.payload.value
      return newState;
    case SIGNUP_SUCCESSFUL:
      newState.loggedIn = true;
      newState.signup.success = true;
      return newState;
    case SIGNUP_NOT_SUCCESSFUL:
      newState.signup.errors = action.payload.errors
      return newState;
    case USER_FETCHED:
      newState.credits = action.payload.credits;
      return newState;
    default:
      return newState;
  }
}

export default userReducer;
