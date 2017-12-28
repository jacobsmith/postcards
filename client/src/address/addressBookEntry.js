import React, { Component } from 'react';
import check from './../assets/check.svg'

import './addressBookEntry.css';

class AddressBookEntry extends Component {
  render() {
    let address = this.props.address;

    let clickHandler = this.props.onClick || (() => {})

    return (
      <div>
          <div className="AddressBookEntry" onClick={clickHandler} key={`${address.id}:${address.lob_id}`}>
            { address.selected ? (<img src={check} className="Address-selected" />) : null }

            <div>
              <div>{address.nickname}</div>
              <div>{address.addressName}</div>
              <div>{address.street}</div>
              <div>{address.city}, {address.state} {address.zip}</div>
            </div>
          </div>
      </div>
    )
  }
}

export default AddressBookEntry;
