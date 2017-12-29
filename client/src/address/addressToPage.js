import React from 'react';
import Layout from './../layout/layout.js';
import AddressTo from './addressTo.js';
import AppHeader from './../layout/appHeader.js';
import AppNavButton from './../nav/appNavButton.js';
import PageContent from './../page/pageContent.js';
import PrimaryAction from './../layout/primaryAction.js';
import Button from './../button/button.js';
import Footer from './../layout/footer.js';
import AddressBook from './addressBook.js';

const AddressToPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <PrimaryAction text="Recipient address" />
        <AddressTo />
        <AddressBook />

        <Button to="/address/from" text="Save to address" enabledProp="postcard.addresses.toAllPresent" />
      </PageContent>
    </Layout>
  )
}

export default AddressToPage;
