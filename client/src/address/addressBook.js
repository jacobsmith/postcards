import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addressActions from './../actions/addressActions.js';
import AddressBookEntry from './addressBookEntry'
import AddressSearch from './addressSearch.js';
import AddressForm from './addressForm';
import Button from './../button/button'
import PrimaryAction from './../layout/primaryAction'

import './addressBook.css';

class AddressBook extends Component {
  componentWillMount() {
    this.props.addressActions.fetchAddresses();
  }

  render() {
    let addresses = this.props.addresses;
    let filteredAddressList = this.props.addressActions
    .filterAddresses(addresses, this.props.searchTerm)
    .sort((a, b) => {
      if (a.addressName.toLowerCase() < b.addressName.toLowerCase()) return -1;
      if (a.addressName.toLowerCase() > b.addressName.toLowerCase()) return 1;
      return 0;
    })

    let selectedAddressCount = addresses.filter(address => address.selected).length;

    if (this.props.display || this.props.reallyDisplay) {
      return (
        <div className="AddressBook">
          <PrimaryAction text="address book" />


          <div className="AddressBook-Header">
            <AddressSearch />
            <div onClick={this.props.addressActions.showCreateNewAddress}>Add Address</div>
          </div>

          <div className="AddressBook-NewAddress" style={{ display: this.props.showCreateNewAddress ? '' : 'none'}}>
            <AddressForm
              namePlaceholder="Address Name"
              onChange={this.props.addressActions.updateAddressInfo('new', 0)}
              canRemove={false}
            />

            <Button
              link={false}
              text="Save Address"
              enabledProp="postcard.addresses.newAllPresent"
              onClick={() => this.props.addressActions.saveNewAddress(this.props.newAddress)}
            />
          </div>

          <div className="AddressBook-list" style={{display: this.props.showCreateNewAddress ? 'none' : ''}}>
            {
              filteredAddressList.map((address) => {
                return (
                  <AddressBookEntry address={address} onClick={() => this.props.addressActions.toggleAddressBookAddressSelected(address)}/>
                )
              })
            }
          </div>

          <div>
            <Button
              style={{display: this.props.showCreateNewAddress ? 'none' : ''}}
              link={false}
              text={`Add ${selectedAddressCount} addresses to postcard`}
              enabled={selectedAddressCount > 0}
              wide={true}
              onClick={this.props.addressActions.addSelectedAddressesToPostcard}
            />

            <Button
              link={false}
              buttonStyle="secondary"
              text="Back"
              onClick={this.props.addressActions.hideAddressBook}
            />
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
    addresses: state.postcard.addresses.originalList,
    newAddress: state.postcard.addresses.new[0],
    showCreateNewAddress: state.postcard.addresses.addressBook.showCreateNewAddress,
    searchTerm: state.postcard.addresses.listSearch
  }
}

function mapDispatchToActions(dispatch) {
  return {
    addressActions: bindActionCreators(addressActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(AddressBook);
