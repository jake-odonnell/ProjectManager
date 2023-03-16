import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import ProductForm from './ProductForm';
import AllProducts from './AllProducts';

const Home = () => {

  const navigate = useNavigate()
  

  const [products, setProducts] = useState([])
  const productInfo = {
    title: '',
    price: 0,
    description: ''
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/all')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (state) => {
    axios.post('http://localhost:8000/api/products/new', state)
        .then(res => navigate(`/${res.data._id}`))
        .catch(err => console.log(err))
      
  }

  return (
    <div>
        <ProductForm productInfo={productInfo} handleSubmit={handleSubmit}/>
        <AllProducts products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Home