import React, { Component } from 'react';
import Address from './address.js';
import {
   updateAddressInfo,
   addToAddress,
   removeToAddress,
  } from './../actions/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddressTo extends Component {
  constructor() {
    super()
  }

  render() {
    let toAddresses = this.props.to.map((address, index) => {
      return (
        <Address
          key={`addressTo:${address.id}`}
          namePlaceholder="To"
          onChange={this.props.updateAddressInfo('to', index)}
          addressName={this.props.to.addressName}
          street={this.props.to.street}
          city={this.props.to.city}
          state={this.props.to.state}
          zip={this.props.to.zip}
          postcardImage={this.props.postcardImage}
          canRemove={index !== 0}
          onRemove={() => this.props.removeToAddress(index)}
        />
      )
    })

    return (
      <div>
        {toAddresses}
        <div onClick={this.props.addToAddress}>Add Another Recipient</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    to: state.postcard.addresses.to,
    postcardImage: state.postcard.photo.imgSrc
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAddressInfo: bindActionCreators(updateAddressInfo, dispatch),
    addToAddress:      bindActionCreators(addToAddress,      dispatch),
    removeToAddress:   bindActionCreators(removeToAddress,   dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressTo);
