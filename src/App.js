import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import Home from './pages/home';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <GlobalStyle />
            <GlobalIcon />
          </div>
        </BrowserRouter>
      </Provider >
    );
  }
}

export default App;
