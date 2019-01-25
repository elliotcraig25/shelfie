//this is a class component 

import React, {Component} from 'react';

class Form extends Component {
    render(){
        return(
            <div>
                <div className="form-image">
                    <div className="form-image-div">

                    </div>
                </div>
                <div className="form-inputs">
                    <p>Image URL:</p>
                    <input />
                    <p>Product Name:</p>
                    <input />
                    <p>Price:</p>
                    <input />
                </div>
                <div className="form-buttons">

                </div>
            </div>
        )
    }
};

export default Form;