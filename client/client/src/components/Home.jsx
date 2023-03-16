import React from 'react'
import ProductForm from './ProductForm';
import AllProducts from './AllProducts';

const Home = (props) => {
  return (
    <div>
        <ProductForm products={props.products} setProducts={props.setProducts}/>
        <AllProducts products={props.products} setProducts={props.setProducts}/>
    </div>
  )
}

export default Home