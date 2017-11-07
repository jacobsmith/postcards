import React, { Component } from 'react';
import Address from './address.js';
import { updateAddressInfo } from './../actions/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddressTo extends Component {
  constructor({ updateAddressInfo }) {
    super()

    this.toUpdater = updateAddressInfo('to');
  }

  render() {
    return (
      <div>
        <Address
          namePlaceholder="To"
          onChange={this.toUpdater}
          addressName={this.props.to.addressName}
          street={this.props.to.street}
          city={this.props.to.city}
          state={this.props.to.state}
          zip={this.props.to.zip}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    to: state.postcard.addresses.to
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAddressInfo: bindActionCreators(updateAddressInfo, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressTo);
