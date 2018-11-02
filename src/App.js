import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TimeList from './components/TimeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeList></TimeList>
      </div>
    );
  }
}

export default App;
