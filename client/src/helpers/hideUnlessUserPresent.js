import { Component } from 'react';
import { connect } from 'react-redux';

class HideUnlessUserPresent extends Component {
  render() {
    if (this.props.userLoggedIn) {
      return this.props.children;
    } else {
      return null;
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
)(HideUnlessUserPresent);
