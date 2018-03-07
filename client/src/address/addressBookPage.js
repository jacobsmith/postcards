import React from 'react';
import Layout from './../layout/layout.js';
import AddressBook from './addressBook.js';
import AppHeader from './../layout/appHeader.js';
import PageContent from './../page/pageContent.js';

const AddressBookPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <AddressBook reallyDisplay={true} showActionButtons={false} />
      </PageContent>
    </Layout>
  )
}

export default AddressBookPage;
