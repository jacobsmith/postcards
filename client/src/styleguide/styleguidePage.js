import React, { Component } from 'react';
import Layout from './../layout/layout.js';
import AppHeader from './../layout/appHeader.js';
import AppNavButton from './../nav/appNavButton.js';
import PageContent from './../page/pageContent.js';
import PrimaryAction from './../layout/primaryAction.js';
import Button from './../button/button.js';
import PostcardImageReview from './../review/postcardImageReview.js';

import LoadingIndicator from './../loading/loadingIndicator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addressActions from './../actions/addressActions.js';

import './styleguide.css';

import AddressBook from './../address/addressBook'


const Text = (props) => {
  return (
    <div className="styleguideText">
      {props.children}
    </div>
  )
}

const StyleguideElement = (props) => {
  return (
    <div className="styleguideElement">
      {props.children}
    </div>
  )
}

function addressEntry(id = Math.random()) {
  return {
    nickname: 'home',
    addressName: 'jacob smith ' + id,
    street: '123 Main Street.',
    city: 'Westfield',
    state: 'IN',
    zip: '46074',
  }
}

class StyleguidePage extends Component {
  componentWillMount() {
    let addresses = new Array(20).fill(addressEntry());
    this.props.addressActions.setAddresses(addresses);
  }

  render() {
    return (
      <Layout>
        <PageContent>
          <AppHeader />
          <PrimaryAction text="Styleguide" />

          <StyleguideElement>
            <AddressBook reallyDisplay={true} />
          </StyleguideElement>

          <StyleguideElement>
            <LoadingIndicator />
          </StyleguideElement>

          <StyleguideElement>
            <LoadingIndicator text="Uploading"/>
          </StyleguideElement>

          <StyleguideElement>
            <LoadingIndicator text="Securely processing your payment and sending the postcard!" wide={true} />
          </StyleguideElement>

          <StyleguideElement>
            <Text>Fetching Postcard</Text>
            <PostcardImageReview preview={{fetchingPostcard: true}} />
          </StyleguideElement>

          <StyleguideElement>
            <Text>Errored Postcard</Text>
            <PostcardImageReview preview={{errorDuringFetch: true}} />
          </StyleguideElement>

          <StyleguideElement>
            <Text>Successful Preview</Text>
            <PostcardImageReview preview={{frontImage: "https://placebear.com/600/400", backImage: "https://placebear.com/600/400"}} />
          </StyleguideElement>

          <StyleguideElement />
        </PageContent>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToActions(dispatch) {
  return {
    addressActions: bindActionCreators(addressActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(StyleguidePage);
