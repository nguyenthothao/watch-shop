import React from 'react';
import data from '../data';

function ProductScreen(props){
    const product = data.products.find(x=> x._id === parseInt(props.match.params.id,10));
    console.log(product);
    return (
        <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt="product"/>
        </div>
    )
}
export default ProductScreen;