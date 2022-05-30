import React, { useRef, useState, useContext } from 'react';
import CardProduct from '../components/CardProduct';
import cardDescriptions from '../utils/description';
import './ProductList.css'

function ProductsList(props) {
  const [payment, setPayment] = useState([])
  const products = [...cardDescriptions]
  const range = useRef(null);
  const [slide, setSlide] = useState(15)
  function handleRange(event) {
    setSlide(event.target.value)
  }
  const addProduct = (price) => {
    setPayment([...payment, price])
  }
  return (
    <>
      <input type="range" min='15' max='40' step='2' ref={range} onChange={(event) => handleRange(event)} />
      <div className='container'>
        {products.map(product => {
          return <CardProduct product={product} key={product.id} slide={slide} 
          addProduct={addProduct}
          />
        })}
      </div>
      <div>
            {payment.length > 0 ? <h1>Total: ${payment.reduce((acc, curr) => acc + curr)}</h1> : <h1>Total: 0</h1>}
          </div>
    </>
  );
}

export default ProductsList;