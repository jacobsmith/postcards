import React, { Component } from 'react';

class PricingDropdown extends Component {
  render() {
    return (
      <div className="dropdownContent">
        <div className="contentHeader">How our pricing works:</div>

        <div className="pricecards">
          <div className="pricecard">
            <div className="pricecardMain">$1.49</div>
            <div className="pricecardDivider"></div>
            <div className="pricecardAdditional">1 postcard</div>
          </div>

          <div className="pricecard">
            <div className="pricecardMain">$12.99</div>
            <div className="pricecardDivider"></div>
            <div className="pricecardAdditional">10 postcards</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PricingDropdown;
