//this is a class component 

import React, {Component} from 'react';

import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            inventoryFromApp: this.props.inventory
        }
    }

    render(){
        const inventoryItems = this.state.inventoryFromApp.map((item)=>{
            return (
                <div className="parent-dash">
                    <Product name={item.name} price={item.price} img={item.img}/>
                </div>
            )
        }) 
        return(
            <div className="parent-dash-parent">
                <div>
                    {inventoryItems}
                </div>
            </div>
        )
    }
};

export default Dashboard