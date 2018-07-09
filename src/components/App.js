import React, { Component } from 'react';
//针对图片文件，取出的是打包后的文件路径


import TestComponent from './commons/TestComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
      <TestComponent  message = {""}/>
      </div>
    );
  }
}

export default App;
