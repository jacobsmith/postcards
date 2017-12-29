import React from 'react';

import AddressReview from './addressReview.js';

const FromAddressReview = ({ address }) => {
  return (
    <div>
      <AddressReview address={address[0]} editLocation="/address/from" type="from" />
    </div>
  )
}

export default FromAddressReview;
