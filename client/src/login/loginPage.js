import React, { Component } from 'react';
import Layout from './../layout/layout.js';
import PageContent from './../page/pageContent.js';
import AppHeader from './../layout/appHeader.js';
import PrimaryAction from './../layout/primaryAction.js';
import Button from './../button/button.js';
import Footer from './../layout/footer.js';
import LoginForm from './loginForm.js';

const LoginPage = ({ match }) => {
  return (
    <Layout match={match} >
      <LoginPageData match={match} />
    </Layout>
  )
}

class LoginPageData extends Component {
  render() {
    return (
      <PageContent>
        <AppHeader />
        <PrimaryAction text="Log in" />
        <LoginForm />
      </PageContent>
    )
  }
}

export default LoginPage;
