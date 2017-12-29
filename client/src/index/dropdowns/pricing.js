import React, { Component } from 'react';

class PricingDropdown extends Component {
  render() {
    return (
      <div className="dropdownContent">
        <div className="contentHeader secondary-info">How our pricing works</div>

        <div className="pricecards">
          <div className="pricecard">
            <div className="pricecardMain main-header">$1.79</div>
            <div className="pricecardDivider"></div>
            <div className="pricecardAdditional">1 postcard</div>
            <div className="pricecardDescription">High quality, full color postcard sent anywhere in the US.</div>
          </div>

          <div className="pricecard">
            <div className="pricecardMain main-header">$14.99</div>
            <div className="pricecardDivider"></div>
            <div className="pricecardAdditional">10 postcards</div>
            <div className="pricecardDescription">Each credit is good for one postcard sent to anywhere in the US - each can be completely unique!</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PricingDropdown;
