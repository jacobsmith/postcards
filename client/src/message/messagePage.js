import React from 'react';
import Layout from './../layout/layout.js';
import Message from './message.js';
import AppHeader from './../layout/appHeader.js';

const MessagePage = () => {
  return (
    <Layout>
      <AppHeader text="What do you want it to say?" />
      <Message />
    </Layout>
  )
}

export default MessagePage;
