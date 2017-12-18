import React, { Component } from 'react';

class AddressBookEntry extends Component {
  render() {
    let address = this.props.address;

    let clickHandler = this.props.onClick || (() => {})

    return (
      <div>
          <div className="Address" onClick={clickHandler}>
            <div>{address.nickname}</div>
            <div>{address.addressName}</div>
            <div>{address.street}</div>
            <div>{address.city}, {address.state} {address.zip}</div>
          </div>
      </div>
    )
  }
}

export default AddressBookEntry;
