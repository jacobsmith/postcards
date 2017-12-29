import React from 'react';
import Layout from './../layout/layout.js';
import AddressBook from './addressBook.js';
import AppHeader from './../layout/appHeader.js';
import PageContent from './../page/pageContent.js';
import PrimaryAction from './../layout/primaryAction.js';
import Button from './../button/button.js';
import Footer from './../layout/footer.js';

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
