import React, { Component } from 'react';

var stateList = new Array("","AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY");
let stateOptions = stateList.map((stateOption) => <option value={stateOption} key={stateOption}>{stateOption}</option>)

class AddressForm extends Component {
  render() {
    let { namePlaceholder, addressName, street, city, state, zip, onChange, postcardImage, canRemove, onRemove, error } = this.props;

    return (
      <div className="Address">
        <div className="address-error">{error}</div>
        { canRemove ? (<div className="remove" onClick={onRemove}>remove</div>) : '' }

        <form>
          <div className="inputGroup">
            <label htmlFor="addressName">Name</label>
            <input value={addressName} name="addressName" onChange={onChange('addressName')} className="Address-Name" autoComplete="shipping name"/>
          </div>

          <div className="inputGroup">
            <label htmlFor="street">Address</label>
            <input value={street} name="street" onChange={onChange('street')}  className="Address-Street" autoComplete="shipping street-address"/>
          </div>

          <div className="cityStateZipInputGroup">
            <div className="inputGroup addressCity">
              <label htmlFor="city">City</label>
              <input value={city} name="city" onChange={onChange('city')} className="Address-City"  autoComplete="shipping address-level2"/>
            </div>

            <div className="inputGroup addressState">
              <label htmlFor="state">State</label>
              <select value={state} onChange={onChange('state')} name="state" className="Address-State" autoComplete="address-level1">
                {stateOptions}
              </select>
            </div>

            <div className="inputGroup addressZip">
              <label htmlFor="zip">ZIP</label>
              <input value={zip} name="zip" type="text" onChange={onChange('zip')} className="Address-Zip"  autoComplete="shipping postal-code"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddressForm;
