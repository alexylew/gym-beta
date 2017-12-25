import React, { Component } from 'react';

import { GradeList } from './GradeList/GradeList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GradeList/>
      </div>
    );
  }
}

export default App;
  