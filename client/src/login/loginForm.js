import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from './../actions/loginActions.js';
import PrimaryButton from './../button/primaryButton.js';

import './loginForm.css';

class LoginForm extends Component {
  constructor() {
    super()
    this.login = this.login.bind(this);
  }

  login() {
    this.props.loginActions.login(this.props.email, this.props.password);
  }

  render() {
    return (
      <div className="login-form">
        <div className="form-error">{this.props.errors ? 'Email or password was incorrect. Please try again!' : ''}</div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input name="email" className="login-email" onChange={this.props.loginActions.updateEmail} value={this.props.email} />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" className="login-password" onChange={this.props.loginActions.updatePassword} value={this.props.password} />
        </div>


        <PrimaryButton text="Start making postcards!" onClick={this.login} to="#" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    email:    state.user.login.email,
    password: state.user.login.password,
    errors:   state.user.login.errored,
  }
}

function mapDispatchToActions(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(LoginForm);
