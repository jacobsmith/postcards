import React from 'react';
import AddressReview from './addressReview.js';

const ToAddressReview = ({ addresses }) => {
  return (
    <div>
      {
        addresses.map(address => {
          return (
            <AddressReview address={address} editLocation="/address/to" type="to" />
          );
        }
        )
      }
    </div>
  )
}

export default ToAddressReview;
