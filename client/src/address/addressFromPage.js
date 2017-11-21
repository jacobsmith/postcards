import React from 'react';
import Layout from './../layout/layout.js';
import AddressFrom from './addressFrom.js';
import PageContent from './../page/pageContent.js';
import AppNavButton from './../nav/appNavButton.js';
import AppHeader from './../layout/appHeader.js';
import PrimaryAction from './../layout/primaryAction.js';
import PrimaryButton from './../button/primaryButton.js';
import Footer from './../layout/footer.js';

const AddressFromPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <PrimaryAction text="Your address" />

        <AddressFrom />

        <PrimaryButton to="/message" text="Save from address" />
        <Footer />
      </PageContent>

    </Layout>
  )
}

export default AddressFromPage;
