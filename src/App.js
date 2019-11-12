import React, { Component } from 'react';
import styles from './App.css';
import CSSModules from 'react-css-modules'; // 可以删除

class App extends Component {
  render() {
    return (
      <div styleName="App">
        你好，react
      </div>
    );
  }
}

export default CSSModules(App, styles); // 可以删除CSSModules
// export default App; // 直接这样导出即可
