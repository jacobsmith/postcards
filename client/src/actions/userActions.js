import customFetch from './../helpers/customFetch.js';

export const USER_LOGGED_IN_SUCCESSFULLY = 'USER_LOGGED_IN_SUCCESSFULLY';

export function userLoggedInSuccessfully(user) {
  return {
    type: USER_LOGGED_IN_SUCCESSFULLY,
    payload: {
      name: user.name,
      id: user.id,
      email: user.email
    }
  }
}

export function checkIfLoggedInToFacebook() {
  return function(dispatch) {
    let handleFbResponse = (response) => {
      if (response['status'] === 'connected') {
        dispatch(loginFacebookUser(response))
      } else {
        // nop, we don't auto-prompt for facebook login, that's creepy
      }
    }

    window.FB.getLoginStatus(handleFbResponse)
  }
}

export function getUserFacebookLogin() {
  return function(dispatch) {
    let handleFbResponse = (response) => {
      if (response['status'] === 'connected') {
        dispatch(loginFacebookUser(response))
      } else {
        window.FB.login((response) => dispatch(loginFacebookUser(response)), {scope: 'email'});
      }
    }

    window.FB.getLoginStatus(handleFbResponse);
  }
}

export function loginFacebookUser(facebookResponse) {
  return function(dispatch) {
    let userAccessToken = facebookResponse['authResponse']['accessToken']

    customFetch('/api/login', {
      method: 'post',
      body: JSON.stringify({ facebookUserAccessToken: userAccessToken })
    })
    .then(response => dispatch(userLoggedInSuccessfully(response.user)) )
  }
}
