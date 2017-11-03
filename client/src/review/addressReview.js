import React, { Component } from 'react';
import EditInfo from './editInfo.js';

class AddressReview extends Component {
  render() {
    let address = this.props.address;

    return (
      <div className="AddressReview">
        <div className="Address">
          <div>{address.addressName}</div>
          <div>{address.street}</div>
          <div>{address.city}, {address.state} {address.zip}</div>
        </div>

        <EditInfo to={this.props.editLocation} />
      </div>
    )
  }
}

export default AddressReview;
