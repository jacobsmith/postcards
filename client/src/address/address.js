import React from 'react';
import './address.css';

const Address = ({ namePlaceholder, addressName, street, city, state, zip, onChange }) => {
  return (
    <div className="Address">
      <form>
      <input value={addressName} onChange={onChange('addressName')} placeholder={namePlaceholder} className="Address-Name" autoComplete="shipping name"/>
      <input value={street} onChange={onChange('street')} placeholder="Street Address" className="Address-Street" autoComplete="shipping street-address"/>
      <div className="Address-CityStateZip">
        <input value={city} onChange={onChange('city')} className="Address-City" placeholder="City" autoComplete="shipping address-level2"/>
        <input value={state} onChange={onChange('state')} className="Address-State" placeholder="State" autoComplete="shipping address-level1"/>
        <input value={zip} onChange={onChange('zip')} className="Address-Zip" placeholder="Zip" autoComplete="shipping postal-code"/>
      </div>
    </form>
    </div>
  )
}

export default Address;
