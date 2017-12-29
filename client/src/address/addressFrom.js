import React, { Component } from 'react';
import Address from './address.js';
import {
  updateAddressInfo,
  setFromAddress,
 } from './../actions/addressActions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddressTo extends Component {
  constructor({ updateAddressInfo }) {
    super()

    this.fromUpdater = updateAddressInfo('from', 0);
  }

  componentDidMount() {
    this.props.setFromAddress(this.props.defaultFrom || this.props.from)
  }

  render() {
    let address = this.props.defaultFrom || this.props.from;

    return (
      <div>
        <Address
          namePlaceholder="From"
          onChange={this.fromUpdater}
          addressName={address.addressName}
          street={address.street}
          city={address.city}
          state={address.state}
          zip={address.zip}
          postcardImage={this.props.postcardImage}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    defaultFrom: (state.postcard.addresses.originalList.filter((address) => address.default_from_address) || [])[0],
    from: state.postcard.addresses.from[0],
    postcardImage: state.postcard.photo.imgSrc
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAddressInfo: bindActionCreators(updateAddressInfo, dispatch),
    setFromAddress: bindActionCreators(setFromAddress, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressTo);
