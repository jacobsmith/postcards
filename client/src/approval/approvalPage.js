import React from 'react';
import Layout from './../layout/layout.js';
import Approval from './approval.js';
import AppHeader from './../layout/appHeader.js';
import PageContent from './../page/pageContent.js';

const ApprovalPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader text="approve final information" />
        <Approval />
      </PageContent>
    </Layout>
  )
}

export default ApprovalPage;
