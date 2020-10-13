import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <GlobalIcon />
      </div>
    );
  }
}

export default App;
