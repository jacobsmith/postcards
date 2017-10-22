import React, { Component } from 'react';
import Address from './address.js';

class AddressInputs extends Component {
  render() {
    return (
      <div className="fromAndTo">
        <Address
          namePlaceholder="From"
          onChange={this.props.onChange('from')}
          addressName={this.props.from.addressName}
          street={this.props.from.street}
          city={this.props.from.city}
          state={this.props.from.state}
          zip={this.props.from.zip}
        />

        <Address
          namePlaceholder="To"
          onChange={this.props.onChange('to')}
          addressName={this.props.to.addressName}
          street={this.props.to.street}
          city={this.props.to.city}
          state={this.props.to.state}
          zip={this.props.to.zip}
        />
      </div>
    )
  }
}

export default AddressInputs;
