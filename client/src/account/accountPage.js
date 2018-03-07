import React from 'react';
import Layout from './../layout/layout.js';
import AppHeader from './../layout/appHeader.js';
import PageContent from './../page/pageContent.js';
import PrimaryAction from './../layout/primaryAction.js';
import CreditPurchase from './creditPurchase.js';

const AddressToPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <PrimaryAction text="My Account" />

        <CreditPurchase />
      </PageContent>
    </Layout>
  )
}

export default AddressToPage;
