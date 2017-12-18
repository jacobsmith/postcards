import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addressActions from './../actions/addressActions.js';

class AddressSearch extends Component {
  render() {
    return (
      <input value={this.props.value} onChange={this.props.addressActions.updateSearch} />
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.postcard.addresses.listSearch
  }
}

function mapDispatchToActions(dispatch) {
  return {
    addressActions: bindActionCreators(addressActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(AddressSearch);
