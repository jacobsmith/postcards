import React, { Component } from 'react';
import Address from './address.js';
import { updateAddressInfo } from './../actions/addressActions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddressInputs extends Component {
  constructor({ updateAddressInfo }) {
    super()

    this.fromUpdater = updateAddressInfo('from');
    this.toUpdater = updateAddressInfo('to');
  }

  render() {
    return (
      <div className="fromAndTo">
        <Address
          namePlaceholder="From"
          onChange={this.fromUpdater}
          addressName={this.props.from.addressName}
          street={this.props.from.street}
          city={this.props.from.city}
          state={this.props.from.state}
          zip={this.props.from.zip}
        />

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
    from: state.postcard.addresses.from,
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
)(AddressInputs);
