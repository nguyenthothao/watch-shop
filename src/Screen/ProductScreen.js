import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props){
    const product = data.products.find(x=> x._id === parseInt(props.match.params.id,10));
    console.log(product);
    return (
        <div>
            <div className="back-homepage"><Link to="/">Back to homepage</Link></div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"/>
                </div>
                <div className="details-info">
                    <ul>
                        <li className="product-name">{product.name}</li>
                        <li className="product-price">Price: ${product.price}</li>
                        <li><p className="product-price">Description:</p> {product.description}</li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>Price : ${product.price}</li>
                        <li>Status : {product.status}</li>
                        <li>Quantity: <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                        </li>
                        <li>
                            <button className="button">Add to cart</button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ProductScreen;