import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import HomeButton from './HomeButton'
import DeleteButton from './DeleteButton'

const Product = () => {

    const {id} = useParams()
    const [oneProduct, setOneProduct] = useState({})
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setOneProduct(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleClick = () => {
      navigate(`/update/${id}`)
    }

  return (
    <div>
        <h1 className='mt-5 mx-auto'>{oneProduct.title}</h1>
        <p className="mx-auto">Price: { oneProduct.price }</p>
        <p className="mx-auto">Description: { oneProduct.description }</p>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-info m-3' onClick={handleClick}>Update Product</button>
          <HomeButton/>
          <DeleteButton id={id}/>
        </div>
        
    </div>
  )
}

export default Product