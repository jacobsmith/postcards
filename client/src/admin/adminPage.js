import React, { Component } from 'react';
import Layout from './../layout/layout.js';
import AppHeader from './../layout/appHeader.js';
import AppNavButton from './../nav/appNavButton.js';
import PageContent from './../page/pageContent.js';
import PrimaryAction from './../layout/primaryAction.js';
import Button from './../button/button.js';
import Footer from './../layout/footer.js';
import AdminPageContent from './adminPageContent';

const AdminPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />

        <AdminPageContent />

      </PageContent>
    </Layout>
  )
}

export default AdminPage;
