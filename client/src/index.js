import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js';
import { unregister } from './registerServiceWorker';
unregister(); // remove any existing service worker installations - can add in later

const store = configureStore();
window.reduxStore = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
