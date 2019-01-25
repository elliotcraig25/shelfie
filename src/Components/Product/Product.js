//this is a functional component

import React from 'react';

const Products = function(props){
    return(
        <div className="display-box">
           <div className="form-image-div">
                <img className="form-image-div-image" src={props.img} alt="abc"/>
            </div>
            <div>
                <p>Name: {props.name}</p>
                <p>Price: {props.price}</p>
            </div>
        </div>
        
    )
}

export default Products