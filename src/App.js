import React, { Component } from 'react';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [
        {
          name: 'shoe',
          price: '5',
          img: 'https://scene7.josbank.com/is/image/JosBank/20924_000_main'
        },
        {
          name: 'cap',
          price: '2.5',
          img: 'https://kickz.akamaized.net/us/media/images/p/1200/champion-Baseball_Cap-NBK_NEW_BLACK-2.jpg'
        },
        {
          name: 'sock',
          price: '3',
          img: 'https://www.wigwam.com/products/images/Product/large/F2020_1_.jpg'
        },
      ]
    }
  }
  render() {
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
