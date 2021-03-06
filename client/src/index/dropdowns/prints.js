import React, { Component } from 'react';
import postcardImg from './../../assets/postcard-icon.svg';

class PrintsDropdown extends Component {
  render() {
    return (
      <div className="dropdownContent">
        <div className="contentHeader secondary-info">About our prints</div>

        <div className="prints">
          <div className="postcardPrintGraphic">
            <div className="four-inches">4"</div>
            <div className="six-inches">6"</div>
            <img src={postcardImg} alt="postcard dimensions"/>
          </div>

          <div className="postcardPrintExplanation small-detail">
            Our postcards are printed on high quality paper with a gloss finish. They are full bleed, meaning that your content will be the only thing on the back of the postcard; there are no margins to distract people from your photo!

            <br />
            <br />
            Most postcards will reach their destination in 4 to 6 business days via USPS.
            <br />
            <br />

            <div className="postcardPrintDetails">
              <div className="postcardPrintDetail">
                <div className="key">
                  size:
                </div>
                <div className="value">
                  4" x 6"
                </div>
              </div>
              <div className="postcardPrintDetail">
                <div className="key">
                  weight:
                </div>
                <div className="value">
                  120 lb cover
                </div>
              </div>
              <div className="postcardPrintDetail">
                <div className="key">
                  finish:
                </div>
                <div className="value">
                  gloss
                </div>
              </div>


            </div>

          </div>



        </div>

      </div>

    )
  }
}

export default PrintsDropdown;
