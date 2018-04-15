import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Library from './Library';
import Search from './Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <h1>MyReads</h1>
            <Library title="Currently Reading"/>
            <Library title="Want to Read"/>
            <Library title="Read"/>
            <Link
              to="/add"
              className="add-button">
            +</Link>
          </div>
        )}/>

        <Route exact path="/add" component={Search}/>
      </div>
    )
  }
}

export default App;
