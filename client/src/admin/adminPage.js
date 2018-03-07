import React from 'react';
import Layout from './../layout/layout.js';
import AppHeader from './../layout/appHeader.js';
import PageContent from './../page/pageContent.js';
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
