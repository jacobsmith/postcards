import React from 'react';
import Layout from './../layout/layout.js';
import Approval from './approval.js';
import AppHeader from './../layout/appHeader.js';
import PageContent from './../page/pageContent.js';
import PrimaryAction from './../layout/primaryAction.js';
import PrimaryButton from './../button/primaryButton.js';
import Footer from './../layout/footer.js';

const ApprovalPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader  />
        <PrimaryAction text="Review all final information" />
        <Approval />
      </PageContent>
    </Layout>
  )
}

export default ApprovalPage;
