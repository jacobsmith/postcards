import React, { Component } from 'react';
import Address from './address.js';
import AppNavButton from './../nav/appNavButton.js';
import { updateAddressInfo } from './../actions/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddressTo extends Component {
  constructor({ updateAddressInfo }) {
    super()

    this.fromUpdater = updateAddressInfo('from');
  }

  render() {
    return (
      <div>
        <Address
          namePlaceholder="From"
          onChange={this.fromUpdater}
          addressName={this.props.from.addressName}
          street={this.props.from.street}
          city={this.props.from.city}
          state={this.props.from.state}
          zip={this.props.from.zip}
        />
        <AppNavButton to="/message" text="Save from address" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    from: state.postcard.addresses.from
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