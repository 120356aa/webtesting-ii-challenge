import React, { Component } from 'react';
import './App.css';

import Display from './components/display.js';

class App extends Component {
  state = {
    atBat: '',
    balls: 0,
    strikes: 0,
  }

  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;
