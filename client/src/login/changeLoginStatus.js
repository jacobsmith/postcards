import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from './../actions/loginActions.js';
import * as flashActions from './../actions/flashActions.js';

import { Link } from 'react-router-dom';

class ChangeLoginStatus extends Component {
  constructor() {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.loginActions.logOut();
    this.props.flashActions.flash('success', 'Logged out');
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div onClick={this.logOut}>Log out</div>
      )
    } else {
      return (
        <div>
          <Link to="/login" className="black-text">Log in</Link>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
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
)(ChangeLoginStatus);
