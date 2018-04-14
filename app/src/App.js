import React, { Component } from 'react';
import Library from './Library';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>MyReads</h1>
        <Library title="Currently Reading"/>
        <Library title="Want to Read"/>
        <Library title="Read"/>
      </div>
    )
  }
}

export default App;
