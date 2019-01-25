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
      inventory: [
        // {
        //     "product_id": 1,
        //     "name": "shoe",
        //     "price": "10000",
        //     "img": "https://scene7.josbank.com/is/image/JosBank/20924_000_main"
        // },
        // {
        //     "product_id": 2,
        //     "name": "cap",
        //     "price": "7000",
        //     "img": "https://kickz.akamaized.net/us/media/images/p/1200/champion-Baseball_Cap-NBK_NEW_BLACK-2.jpg"
        // },
        // {
        //     "product_id": 3,
        //     "name": "sock",
        //     "price": "1000",
        //     "img": "https://www.wigwam.com/products/images/Product/large/F2020_1_.jpg"
        // }
    ],
    }
    this.getMethod = this.getMethod.bind(this)
  }
  
  getMethod(){
    axios.get(`/api/inventory`)
    .then((response)=>{
      this.setState({
        inventory: response.data
      })
      console.log(response.data)
    })
  }

  componentDidMount(){
    axios.get(`/api/inventory`)
    .then((response)=>{
      this.setState({
        inventory: response.data
      })
      console.log(response.data)
    })
  }

  render() {
    console.log(this.state.inventory)  
    return (
      <div className="App">
        <Header />
        <div className="the-form-and-the-dash">
          <Dashboard inventory={this.state.inventory}/>
          <Form getMethod={this.getMethod}/> 
        </div>
      </div>
    );
  }
}

export default App;
