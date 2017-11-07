import React from 'react';
import Layout from './../layout/layout.js';
import AddressFrom from './addressFrom.js';
import PageContent from './../page/pageContent.js';
import AppNavButton from './../nav/appNavButton.js';
import AppHeader from './../layout/appHeader.js';

const AddressFromPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader text="Who is this postcard from?" />
        <AddressFrom />
      </PageContent>

      <AppNavButton to="/message" text="Save from address" />
    </Layout>
  )
}

export default AddressFromPage;
