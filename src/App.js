import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
    }
  }

  componentDidMount(){
    axios.get(`/api/inventory`)
    .then((res)=>{
      
    })
    this.setState({
      inventory:
    })
  }

  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard inventory={this.state.inventory}/>
      </div>
    );
  }
}

export default App;
