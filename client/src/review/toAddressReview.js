import React from 'react';
import AddressReview from './addressReview.js';

const ToAddressReview = ({ address }) => {
  return (
    <AddressReview address={address} editLocation="/address/to" />
  )
}

export default ToAddressReview;
