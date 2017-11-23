import React from 'react';
import Layout from './../layout/layout.js';
import Message from './message.js';
import AppHeader from './../layout/appHeader.js';
import PrimaryAction from './../layout/primaryAction.js';
import PrimaryButton from './../button/primaryButton.js';
import Footer from './../layout/footer.js';

const MessagePage = () => {
  return (
    <Layout>
      <AppHeader />
      <PrimaryAction text="What do you want it to say?" />
      <Message />

      <PrimaryButton to="/approve" text="Save my message" />
    </Layout>
  )
}

export default MessagePage;
