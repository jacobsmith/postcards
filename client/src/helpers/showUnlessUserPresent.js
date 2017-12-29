import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ShowUnlessUserPresent extends Component {
  render() {
    if (this.props.userLoggedIn) {
      return null;
    } else {
      return this.props.children;
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoggedIn: state.user.loggedIn
  }
}

function mapDispatchToActions(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(ShowUnlessUserPresent);
