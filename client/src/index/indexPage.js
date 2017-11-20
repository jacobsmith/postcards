import React from 'react';
import './indexPage.css';
import './dropdown.css';
import './processDropdown.css';
import './printDropdown.css';

import headerImg from './headerImg.png';
import cameraImg from './camera.png';
import PrimaryButton from './../button/primaryButton.js'
import DropdownToggle from './dropdown.js';

const IndexPage = () => {
  return (
    <div className="page">
      <div className="header">
        <div className="headerLeft">
          <img src={headerImg} alt="logo" className="headerLogo"/>
          <div className="headerName">Say it with a Postcard</div>
          <div className="headerSpacer"></div>
        </div>

        <div className="headerRight">
          <DropdownToggle text="Pricing">
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
          </DropdownToggle>
          <DropdownToggle text="Process">
            <div className="dropdownContent">
            <div className="contentHeader secondary-info">How our process works</div>

            <div className="processCards">
              <div className="processCard">
                <div className="processImageContainer">
                  <div className="processImage">
                    <img src={cameraImg} />
                  </div>
                </div>

                <div className="processStep secondary-action">
                  01. Upload
                </div>

                <div className="processDetails small-detail">
                  Choose the perfect image for your postcard from your image library.
                </div>

              </div>
              <div className="processCard">
                <div className="processImage">

                </div>

                <div className="processStep secondary-action">
                  02. Addresses
                </div>

                <div className="processDetails small-detail">
                  Fill out who you're sending to or use our address book to keep track of addresses.
                </div>

              </div>
              <div className="processCard">
                <div className="processImage">

                </div>

                <div className="processStep secondary-action">
                  03. Note
                </div>

                <div className="processDetails small-detail">
                  Thank someone, tell Grandma "hi", or even share an inside joke!
                </div>

              </div>
              <div className="processCard">
                <div className="processImage">

                </div>

                <div className="processStep secondary-action">
                  04. Send
                </div>

                <div className="processDetails small-detail">
                  Your postcard will be printed and mailed to your lucky recipient in 4 to 6 business days!
                </div>

              </div>
            </div>

          </div>


          </DropdownToggle>
          <DropdownToggle text="Prints">

            <div className="dropdownContent">
              <div className="contentHeader">About our prints:</div>

              <div className="prints">
                <div className="postcardPrintGraphic">
                  <img src={cameraImg} />
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


          </DropdownToggle>
        </div>
      </div>

      <div className="mainBody">
        <div className="getStarted">Hello, let's get started!</div>
        <div className="mainCameraOutsideBorder">
          <div className="mainCamera">
            <img src={cameraImg} alt="" className=""/>
          </div>
        </div>

        <PrimaryButton text="Build your postcard" to="/start"/>
      </div>

      <div className="footer-container">
        &copy; Say it with a Postcard. All Rights Reserved.
      </div>
    </div>
  )
}

export default IndexPage;
