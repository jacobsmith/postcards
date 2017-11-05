import React from 'react';
import './address.css';

const Address = ({ namePlaceholder, addressName, street, city, state, zip, onChange }) => {
  return (
    <div className="Address">
      <form>
        <div className="inputGroup">
          <label htmlFor="addressName">Name</label>
          <input value={addressName} name="addressName" onChange={onChange('addressName')} className="Address-Name" autoComplete="shipping name"/>
        </div>

        <div className="inputGroup">
          <label htmlFor="street">Address</label>
          <input value={street} name="street" onChange={onChange('street')}  className="Address-Street" autoComplete="shipping street-address"/>
        </div>

        <div className="inputGroup">
          <label htmlFor="city">City</label>
          <input value={city} name="city" onChange={onChange('city')} className="Address-City"  autoComplete="shipping address-level2"/>
        </div>

        <div className="inputGroup">
          <label htmlFor="state">State</label>
          <input value={state} name="state" onChange={onChange('state')} className="Address-State"  autoComplete="shipping address-level1"/>
        </div>

        <div className="inputGroup">
          <label htmlFor="zip">ZIP</label>
          <input value={zip} name="zip" type="number" onChange={onChange('zip')} className="Address-Zip"  autoComplete="shipping postal-code"/>
        </div>
      </form>
    </div>
  )
}

export default Address;
