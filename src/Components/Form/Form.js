//this is a class component 

import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            imageUrlInput: '',
            productNameInput: '',
            priceInput: ''
        }
    }

    handleImageUrlInput(value){
        this.setState({
            imageUrlInput: value
        })
        console.log(this.state.imageUrlInput)
    }

    handleProductNameInput(value){
        this.setState({
            productNameInput: value
        })
        console.log(this.state.productNameInput)
    }

    handlePriceInput(value){
        this.setState({
            priceInput: value
        })
        console.log(this.state.priceInput)
    }

    handleCancelClick(){
        this.setState({
            imageUrlInput: '',
            productNameInput: '',
            priceInput: ''
        })
        console.log(this.state.imageUrlInput)
        console.log(this.state.productNameInput)
        console.log(this.state.priceInput)      
    }

    render(){
        return(
            <div className="parent-form">
                <div className="form-image">
                    <div className="form-image-div">

                    </div>
                </div>
                <div className="form-inputs">
                    <p>Image URL:</p>
                    <input onChange={(e)=>{
                        this.handleImageUrlInput(e.target.value)
                    }} value={this.state.imageUrlInput}/>
                    <p>Product Name:</p>
                    <input onChange={(e)=>{
                        this.handleProductNameInput(e.target.value)
                    }} value={this.state.productNameInput}/>
                    <p>Price:</p>
                    <input onChange={(e)=>{
                        this.handlePriceInput(e.target.value)
                    }} value={this.state.priceInput}/>
                </div>
                <div className="form-buttons">
                    <button onClick={()=>{
                        this.handleCancelClick()
                    }}>Cancel</button>
                    <button>Add to inventory</button>
                </div>
            </div>
        )
    }
};

export default Form;