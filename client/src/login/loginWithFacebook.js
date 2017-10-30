import React, { Component } from 'react';
import customFetch from './../helpers/customFetch.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions  from './../actions/userActions.js';
import facebookLoginButtonImg from './facebookLoginButton.png'


class LoginWithFacebook extends Component {
  constructor() {
    super();

    this.authenticateOnServer = this.authenticateOnServer.bind(this);
  }

  // componentWillMount() {
  //   this.props.userActions.getUserFacebookLogin();
  // }

  authenticateOnServer(response) {
    this.props.userActions.loginFacebookUser();
  }

  render() {
    return (
      <div>
        <div>Hello, {this.props.user.name}</div>
        <img src={facebookLoginButtonImg} onClick={this.props.userActions.getUserFacebookLogin} style={{width: '100%'}}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToActions(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(LoginWithFacebook);
