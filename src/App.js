import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <GlobalStyle />
          <GlobalIcon />
        </div>
      </Provider >
    );
  }
}

export default App;
