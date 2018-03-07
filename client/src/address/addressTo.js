import React, { Component } from 'react';
import Address from './address.js';
import {
   updateAddressInfo,
   addToAddress,
   removeToAddress,
   showAddressBook,
 } from './../actions/addressActions.js';
 import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HideUnlessUserPresent from './../helpers/hideUnlessUserPresent';
import ShowUnlessUserPresent from './../helpers/showUnlessUserPresent';

class AddressTo extends Component {
  render() {
    let toAddresses = this.props.to.map((address, index) => {
      return (
        <Address
          key={`addressTo:${address.id}`}
          namePlaceholder="To"
          onChange={this.props.updateAddressInfo('to', index)}
          addressName={address.addressName}
          street={address.street}
          city={address.city}
          state={address.state}
          zip={address.zip}
          postcardImage={this.props.postcardImage}
          canRemove={index !== 0}
          onRemove={() => this.props.removeToAddress(index)}
        />
      )
    })

    return (
      <div style={{ display: this.props.addressBookDisplay ? 'none' : '' }}>
        <HideUnlessUserPresent>
          <Link to="#" onClick={this.props.showAddressBook} className="white-text">Address Book</Link>
        </HideUnlessUserPresent>

        <ShowUnlessUserPresent>
          <Link to="/login" className="white-text">Login to use your own Address Book</Link>
        </ShowUnlessUserPresent>

        {toAddresses}
        <div className="handOnHover" onClick={this.props.addToAddress}>Add Another Recipient</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    to: state.postcard.addresses.to,
    postcardImage: state.postcard.photo.imgSrc,
    addressBookDisplay:   state.postcard.addresses.addressBook.display,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAddressInfo: bindActionCreators(updateAddressInfo, dispatch),
    addToAddress:      bindActionCreators(addToAddress,      dispatch),
    removeToAddress:   bindActionCreators(removeToAddress,   dispatch),
    showAddressBook:   bindActionCreators(showAddressBook,   dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressTo);
