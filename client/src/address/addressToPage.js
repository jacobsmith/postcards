import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Layout from './../layout/layout.js';
import AddressTo from './addressTo.js';
import AppHeader from './../layout/appHeader.js';
import AppNavButton from './../nav/appNavButton.js';
import PageContent from './../page/pageContent.js';
import PrimaryAction from './../layout/primaryAction.js';
import Button from './../button/button.js';
import Footer from './../layout/footer.js';
import AddressBook from './addressBook.js';
import * as addressActions from './../actions/addressActions';

const AddressToPage = ({ addressActions, toAddresses }) => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <PrimaryAction text="Recipient address" />
        <AddressTo />
        <AddressBook />

        <Button
          to="/address/from"
          text="Save to address"
          enabledProp="postcard.addresses.toAllPresent"
          onClick={() => addressActions.saveAddresses(toAddresses)}
        />
      </PageContent>
    </Layout>
  )
}

function mapStateToProps(state) {
  return {
    toAddresses: state.postcard.addresses.to
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
)(AddressToPage);
