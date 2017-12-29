import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as flashActions from './../actions/flashActions.js';

function RequireUserHOC(wrappedComponent) {
  class RequireUser extends Component {
    render() {

      if (this.props.userLoggedIn) {
        return React.createElement(wrappedComponent);
      } else {
        this.props.flashActions.flash('warning', 'Please log in first.');

        return (
          <Redirect to="/" />
        )
      }
    }
  }

  function mapStateToProps(state) {
    return {
      userLoggedIn: state.user.loggedIn
    }
  }

  function mapDispatchToActions(dispatch) {
    return {
      flashActions: bindActionCreators(flashActions, dispatch)
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToActions
  )(RequireUser)
}

export default RequireUserHOC;
