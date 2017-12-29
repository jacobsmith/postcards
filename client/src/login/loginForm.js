import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from './../actions/loginActions.js';
import * as flashActions from './../actions/flashActions.js';
import Button from './../button/button.js';
import { Redirect, Link } from 'react-router-dom';

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
    if (this.props.loggedIn) {
      this.props.flashActions.flash('success', 'You are logged in!');
      return (
        <Redirect to="/" push />
      )
    }

    return (
      <form className="login-form">
        <div className="form-error">{this.props.errors ? 'Email or password was incorrect. Please try again!' : ''}</div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input name="email" className="login-email" onChange={this.props.loginActions.updateEmail} value={this.props.email} />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" className="login-password" onChange={this.props.loginActions.updatePassword} value={this.props.password} />
        </div>


        <Button text="Start making postcards!" onClick={this.login} to="#" type="submit" />

        <Link className="already-have-account white-text" to="/signup" style={{marginTop: '2rem'}}>Don't have an account? Click here to sign up!</Link>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    email:    state.user.login.email,
    password: state.user.login.password,
    errors:   state.user.login.errored,
    loggedIn: state.user.loggedIn
  }
}

function mapDispatchToActions(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
    flashActions: bindActionCreators(flashActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(LoginForm);
