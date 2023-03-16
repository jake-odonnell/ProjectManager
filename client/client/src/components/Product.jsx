import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {

    const {id} = useParams()
    const [oneProduct, setOneProduct] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setOneProduct(res.data))
            .catch((err) => console.log(err))
    }, [])
  return (
    <div>
        <h1 className='mt-5 mx-auto'>{oneProduct.title}</h1>
        <p className="mx-auto">Price: { oneProduct.price }</p>
        <p className="mx-auto">Description: { oneProduct.description }</p>
    </div>
  )
}

export default Product