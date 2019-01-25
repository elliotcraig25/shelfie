import React, { Component } from 'react';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard />
      </div>
    );
  }
}

export default App;
