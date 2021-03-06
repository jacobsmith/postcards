import React, { Component } from 'react';
import EditInfo from './editInfo.js';

class AddressReview extends Component {
  render() {
    let address = this.props.address;

    return (
      <div className="AddressReview">
        <div className="AddressReview-Type">{this.props.type}</div>

        <div className="AddressReviewAndEdit">
          <div className="AddressReview-Address">
            <div>{address.addressName}</div>
            <div>{address.street}</div>
            <div>{address.city}, {address.state} {address.zip}</div>
          </div>
          <EditInfo editLocation={this.props.editLocation} />
        </div>
      </div>
    )
  }
}

export default AddressReview;
