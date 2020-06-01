import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Projeto Pi</h1>
      </div>
    );
  }
}

export default App;
