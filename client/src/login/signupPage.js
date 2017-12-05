import React, { Component } from 'react';
import Layout from './../layout/layout.js';
import PageContent from './../page/pageContent.js';
import AppHeader from './../layout/appHeader.js';
import PrimaryAction from './../layout/primaryAction.js';
import PrimaryButton from './../button/primaryButton.js';
import Footer from './../layout/footer.js';
import SignupForm from './signupForm.js';

const SignupPage = ({ match }) => {
  return (
    <Layout match={match} >
      <SignupPageData match={match} />
    </Layout>
  )
}

class SignupPageData extends Component {
  render() {
    return (
      <PageContent>
        <AppHeader />
        <PrimaryAction text="Sign up" />
        <SignupForm />
      </PageContent>
    )
  }
}

export default SignupPage;
