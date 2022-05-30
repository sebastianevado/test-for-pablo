import React, { useState, useContext, useReducer } from 'react';
// import CartContext from '../../context/CartContext';
import './styles.css';

function CardProduct(props) {

  const { product, slide } = props;
  const [button, setButton] = useState(false)
  const [details, setDetails] = useState({
    id: product.id,
    title: product.title,
    price: product.price,
    amount: product.amount,
    description: product.description
  });

  function handleTitle (event) {
    if(details.title !== event.target.value) {
      setDetails({
        ...details,
        title: event.target.value
      })
    }
  }
  function handleHack(){
    props.addProduct(details.price)
  }
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='image'> </div>
        <h1 onClick={()=> setButton(!button)} style={{ fontSize: `${slide}px` }}><span className='title-content'>{details.title}</span></h1>
        {button && <input type="text" name="" id="" onChange={(event)=>handleTitle(event)} /> }
        <div className="price">
          <h4>${details.price}.00</h4>
          <div className="square">
            <p>{details.amount}</p>
        </div>
        </div>
        <p className='description-content'>{details.description}</p>
        <button className="add" onClick={()=> props.addProduct(details.price)}>Add to cart</button>
        <p className="label">Learn More</p>
      </div>
    </div>
  );
}

export default CardProduct;
