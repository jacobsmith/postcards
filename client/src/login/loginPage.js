import React, { Component } from 'react';
import Layout from './../layout/layout.js';
import LoginWithFacebook from './loginWithFacebook.js'

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
      <LoginWithFacebook />
    )
  }
}

export default LoginPage;
