import React from 'react';
import Layout from './../layout/layout.js';
import Approval from './approval.js';
import AppHeader from './../layout/appHeader.js';

const ApprovalPage = () => {
  return (
    <Layout>
      <AppHeader text="approve final information" />
      <Approval />
    </Layout>
  )
}

export default ApprovalPage;
