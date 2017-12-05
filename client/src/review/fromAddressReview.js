import React from 'react';

import AddressReview from './addressReview.js';

const FromAddressReview = ({ address }) => {
  return (
    <AddressReview address={address[0]} editLocation="/address/from" type="from" />
  )
}

export default FromAddressReview;
