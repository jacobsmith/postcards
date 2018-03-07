import React from 'react';
import Layout from './../layout/layout.js';
import Message from './message.js';
import AppHeader from './../layout/appHeader.js';
import PrimaryAction from './../layout/primaryAction.js';
import Button from './../button/button.js';

const MessagePage = () => {
  return (
    <Layout>
      <AppHeader />
      <PrimaryAction text="What do you want it to say?" />
      <Message />

      <Button to="/approve" text="Save my message" enabledProp="postcard.message.value" />
    </Layout>
  )
}

export default MessagePage;
