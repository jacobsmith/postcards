import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions  from './../actions/userActions.js';
import facebookLoginButtonImg from './facebookLoginButton.png'


class LoginWithFacebook extends Component {
  constructor() {
    super();
  }

  // oncomponentmount check if logged in to facebook, will need to update actions

  render() {
    let loggedInUserContent = (
      <div>
        <div>Hello, {this.props.user.name}!</div>

        <div>You're now ready to send a postcard!</div>
        <Link to="/start">Let's get started!</Link>
      </div>
    )

    let loggedOutUserContent = (
      <div>
        <img src={facebookLoginButtonImg} onClick={this.props.userActions.getUserFacebookLogin} style={{width: '100%'}}/>

      </div>
    )


    return this.props.user.loggedInToFacebook ? loggedInUserContent : loggedOutUserContent ;
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
