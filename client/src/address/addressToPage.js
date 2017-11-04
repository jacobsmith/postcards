import React from 'react';
import Layout from './../layout/layout.js';
import AddressTo from './addressTo.js';
import AppHeader from './../layout/appHeader.js';

const AddressToPage = () => {
  return (
    <Layout>
      <AppHeader text="Who are you sending to?" />
      <AddressTo />
    </Layout>
  )
}

export default AddressToPage;
