import React, { useState } from 'react';
import { products } from './listproduct';
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {incrementHandler, decrementHandler} from './redux products/action'

export default function Product() {

const dispatch= useDispatch();
const PLUS=(price)=>{dispatch(incrementHandler(price))};
const MINUS=()=>{dispatch(decrementHandler())};
const number =useSelector((state)=>state.counter)
const totalPrice =useSelector((state)=>state.price)
return(
    <div>
    <div>
    <Button variant="info" ><i class="fa fa-shopping-basket"></i></Button>
    </div>
    <div>
        Shopping Cart: {number} total items.
    </div>
    <div>Total: {totalPrice}  $</div>
        <div className="product">
        {products.map(product => ( <div  className="product-title">
        <div key={product.title}>
            <div >
            <span role="img" aria-label={product.title}><img  src={product.image} width="200" height="220"/></span>
            <h6>{product.title}</h6>
            <p>{product.disc}</p>
            </div>
            </div>
            <div className="product-btn" >
            <Button variant="info" onClick={()=> PLUS(product.price)}>Add</Button> {' '}
            <span className="price">{product.price} dt</span> {' '}
            <Button variant="secondary"  onClick={MINUS}>Remove</Button>
        
        </div>
        </div>
        ))}
    </div>

    </div>
)
}
