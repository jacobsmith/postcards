import React, { Component } from 'react';
import PostcardCreationPage from './postcardCreation/postcardCreationPage.js';
import LoginPage from './login/loginPage.js';
import AddressToPage from './address/addressToPage.js';
import AddressFromPage from './address/addressFromPage.js';
import MessagePage from './message/messagePage.js';
import ApprovalPage from './approval/approvalPage.js';
import ImageUploadPage from './imageUpload/imageUploadPage.js';
import PaymentPage from './payment/paymentPage.js';
import IndexPage from './index/indexPage.js';
import StyleguidePage from './styleguide/styleguidePage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact={true} component={IndexPage} />
            <Route path="/login" exact={true} component={LoginPage} />
            <Route path="/start" exact={true} component={ImageUploadPage} />
            <Route path="/address/to" exact={true} component={AddressToPage} />
            <Route path="/address/from" exact={true} component={AddressFromPage} />
            <Route path="/message" exact={true} component={MessagePage} />
            <Route path="/approve" exact={true} component={ApprovalPage} />
            <Route path="/styleguide" exact={true} component={StyleguidePage} />
            <Route path="/payment" exact={true} component={PaymentPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
