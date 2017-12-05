import {
  ADMIN_USERS_FETCHED,
  GAVE_CREDIT_TO_USER
} from './../actions/adminActions';

export default function adminReducer(state = { users: [] }, action) {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ADMIN_USERS_FETCHED:
      newState.users = action.payload;
      return newState;
    case GAVE_CREDIT_TO_USER:
      let userIndex = newState.users.map(el => el.id).indexOf(action.payload.id)
      newState.users[userIndex] = action.payload;

      return newState;
    default:
      return newState;
  }
}
