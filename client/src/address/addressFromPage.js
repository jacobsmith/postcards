import React from 'react';
import Layout from './../layout/layout.js';
import AddressFrom from './addressFrom.js';
import PageContent from './../page/pageContent.js';
import AppHeader from './../layout/appHeader.js';
import PrimaryAction from './../layout/primaryAction.js';
import Button from './../button/button.js';

const AddressFromPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <PrimaryAction text="Your address" />

        <AddressFrom />

        <Button to="/message" text="Save from address" enabledProp="postcard.addresses.fromAllPresent" />
      </PageContent>

    </Layout>
  )
}

export default AddressFromPage;
