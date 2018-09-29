import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"></h1>
          </header>
          <p className="App-intro">
          blah blah blah
          </p>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
