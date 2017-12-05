import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as signupActions from './../actions/signupActions.js';
import * as flashActions from './../actions/flashActions.js';
import PrimaryButton from './../button/primaryButton.js';
import { Redirect } from 'react-router-dom';

import './signupForm.css';

class SignupForm extends Component {
  constructor() {
    super()
    this.signUp = this.signUp.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  signUp() {
    this.props.signupActions.signUp(this.props.email, this.props.password, this.props.passwordConfirmation);
  }

  updateField(field) {
    return function(event) {
      this.props.signupActions.signupValueChanged(field, event.target.value);
    }.bind(this);
  }

  render() {
    if (this.props.loggedIn) {
      this.props.flashActions.flash('success', 'You are logged in!');
      return (
        <Redirect to="/" push />
      )
    }

    return (
      <form className="signup-form">
        <div className="form-error">{this.props.errors ? this.props.errors : ''}</div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input name="email" className="signup-email" onChange={this.updateField('email')} value={this.props.email} />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" className="signup-password" onChange={this.updateField('password')} value={this.props.password} />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password Confirmation</label>
          <input name="password" type="password" className="signup-password" onChange={this.updateField('passwordConfirmation')} value={this.props.passwordConfirmation} />
        </div>


        <PrimaryButton text="Start making postcards!" onClick={this.signUp} to="#" type="submit" />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    email:                state.user.signup.email,
    password:             state.user.signup.password,
    passwordConfirmation: state.user.signup.passwordConfirmation,
    errors:               state.user.signup.errors,
    loggedIn:             state.user.login.loggedIn
  }
}

function mapDispatchToActions(dispatch) {
  return {
    signupActions: bindActionCreators(signupActions, dispatch),
    flashActions: bindActionCreators(flashActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(SignupForm);
