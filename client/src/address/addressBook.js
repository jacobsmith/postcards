import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addressActions from './../actions/addressActions.js';
import AddressBookEntry from './addressBookEntry'
import AddressSearch from './addressSearch.js';

import './addressBook.css';

class AddressBook extends Component {
  render() {
    if (this.props.display || this.props.reallyDisplay) {
      return (
        <div className="AddressBook">
          <div>Address Book</div>
          <AddressSearch />
          <div className="AddressBook-list">
            {this.props.addresses.map(address => <AddressBookEntry address={address} onClick={() => this.props.addressActions.addressBookAddressSelected(address)}/>)}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

function mapStateToProps(state) {
  return {
    display:   state.postcard.addresses.addressBook.display,
    addresses: state.postcard.addresses.list
    // addresses: [
    //   {
    //     addressName: 'jacob',
    //     street: '123 main street',
    //     city: 'westfield',
    //     state: 'in',
    //     zip: '46074'
    //   }
    // ]
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
)(AddressBook);
