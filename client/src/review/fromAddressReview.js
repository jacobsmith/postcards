import React from 'react';

import AddressReview from './addressReview.js';

const FromAddressReview = ({ address }) => {
  return (
    <AddressReview address={address} editLocation="/address/from" />
  )
}

export default FromAddressReview;
