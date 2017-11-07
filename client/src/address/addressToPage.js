import React from 'react';
import Layout from './../layout/layout.js';
import AddressTo from './addressTo.js';
import AppHeader from './../layout/appHeader.js';
import AppNavButton from './../nav/appNavButton.js';
import PageContent from './../page/pageContent.js';

const AddressToPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader text="Who are you sending to?" />
        <AddressTo />
      </PageContent>

      <AppNavButton to="/address/from" text="Save to address" />
    </Layout>
  )
}

export default AddressToPage;
