import React from 'react';
import Layout from './../layout/layout.js';
import AddressFrom from './addressFrom.js';
import AppHeader from './../layout/appHeader.js';

const AddressFromPage = () => {
  return (
    <Layout>
      <AppHeader text="Who is this postcard from?" />
      <AddressFrom />
    </Layout>
  )
}

export default AddressFromPage;
