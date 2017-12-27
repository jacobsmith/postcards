import React from 'react';
import AddressForm from './addressForm.js';
import './address.css';

const Address = ({ namePlaceholder, addressName, street, city, state, zip, onChange, postcardImage, canRemove, onRemove }) => {
  return (
    <div className="AddressContainer">
      <div className="postcardImageContainer">
        <img src={postcardImage} className="postcardImage"/>
      </div>

      <AddressForm
        namePlaceholder={namePlaceholder}
        addressName={addressName}
        street={street}
        city={city}
        state={state}
        zip={zip}
        canRemove={canRemove}
        onRemove={onRemove}
        onChange={onChange}
      />
    </div>
  )
}

export default Address;
