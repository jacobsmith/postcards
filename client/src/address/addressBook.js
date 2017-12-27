import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addressActions from './../actions/addressActions.js';
import AddressBookEntry from './addressBookEntry'
import AddressSearch from './addressSearch.js';
import AddressForm from './addressForm';
import PrimaryButton from './../button/primaryButton'

import './addressBook.css';

class AddressBook extends Component {
  componentWillMount() {
    this.props.addressActions.fetchAddresses();
  }

  render() {
    if (this.props.display || this.props.reallyDisplay) {
      return (
        <div className="AddressBook">
          <div>Address Book</div>

          <div className="AddressBook-Header">
            <AddressSearch />
            <div onClick={this.props.addressActions.showCreateNewAddress}>Add Address</div>
          </div>

          <div style={{ display: this.props.showCreateNewAddress ? '' : 'none'}}>
            <AddressForm
              namePlaceholder="Address Name"
              onChange={this.props.addressActions.updateAddressInfo('new', 0)}
              canRemove={false}
            />

            <PrimaryButton
              link={false}
              text="Save Address"
              enabledProp="postcard.addresses.newAllPresent"
              onClick={() => this.props.addressActions.saveNewAddress(this.props.newAddress)}
            />
          </div>

          <div className="AddressBook-list">
            {
              this.props.addresses.map((address) => {
                return (
                  <AddressBookEntry address={address} onClick={() => this.props.addressActions.addressBookAddressSelected(address)}/>
                )
              })
            }
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
    addresses: state.postcard.addresses.list,
    newAddress: state.postcard.addresses.new[0],
    showCreateNewAddress: state.postcard.addresses.addressBook.showCreateNewAddress,
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
