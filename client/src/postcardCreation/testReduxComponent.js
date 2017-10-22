import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from  './../actions/actions.js';

class TestReduxComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div onClick={() => this.props.testReduxComponentActions.testAction()}>I am a Test Redux Component - {this.props.currentValue}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentValue: state.testReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    testReduxComponentActions: bindActionCreators(testActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestReduxComponent);
