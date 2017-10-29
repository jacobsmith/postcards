import React, { Component } from 'react';
import PostcardCreationPage from './postcardCreation/postcardCreationPage.js';
import LoginPage from './login/loginPage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact={true} component={LoginPage} />
            <Route path="/start" exact={true} component={PostcardCreationPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
