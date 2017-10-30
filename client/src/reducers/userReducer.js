import {
  USER_LOGGED_IN_SUCCESSFULLY
} from './../actions/userActions.js';

function userReducer(state = {}, action) {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case USER_LOGGED_IN_SUCCESSFULLY:
      newState.name = action.payload.name
      newState.email = action.payload.email
      newState.id = action.payload.id
      newState.loggedInToFacebook = true

      return newState;
    default:
      return newState;
  }
}

export default userReducer;
