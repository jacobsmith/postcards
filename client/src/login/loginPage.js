import React, { Component } from 'react';
import Layout from './../layout/layout.js';

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
      <div>I am the login page.</div>
    )
  }
}

export default LoginPage;
