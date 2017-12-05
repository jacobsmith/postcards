import customFetch from './../helpers/customFetch.js';

export const ADMIN_USERS_FETCHED = 'ADMIN_USERS_FETCHED';
export const GAVE_CREDIT_TO_USER = 'GAVE_CREDIT_TO_USER';

export function fetchAllUsers() {
  return function(dispatch) {
    customFetch('/admin/users')
    .then(users => dispatch(usersFetched(users)))
  }
}

function usersFetched(users) {
  return {
    type: ADMIN_USERS_FETCHED,
    payload: users
  }
}

export function giveCredit(userId, n) {
  return function(dispatch) {
    customFetch(`/admin/users/${userId}/credit`, {
      method: 'post',
      body: JSON.stringify({ credits: n })
    }).then(user => dispatch(gaveCreditToUser(user)))
  }
}

function gaveCreditToUser(user) {
  return {
    type: GAVE_CREDIT_TO_USER,
    payload: user
  }
}
