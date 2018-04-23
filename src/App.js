import React, { Component } from 'react';
import './App.css';
import FileSystemPage from './component/fileSystemPage'

class App extends Component {
  render() {
    return (
      <div style={{height:'100%', position:'fixed'}}>
        <FileSystemPage/>
      </div>
    );
  }
}

export default App;
