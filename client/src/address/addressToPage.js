import React from 'react';
import Layout from './../layout/layout.js';
import AddressTo from './addressTo.js';
import AppHeader from './../layout/appHeader.js';
import AppNavButton from './../nav/appNavButton.js';
import PageContent from './../page/pageContent.js';
import PrimaryAction from './../layout/primaryAction.js';
import PrimaryButton from './../button/primaryButton.js';
import Footer from './../layout/footer.js';

const AddressToPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <PrimaryAction text="Recipient address" />
        <AddressTo />

        <PrimaryButton to="/address/from" text="Save to address" enabledProp="postcard.addresses.to.allPresent" />
      </PageContent>
    </Layout>
  )
}

export default AddressToPage;
