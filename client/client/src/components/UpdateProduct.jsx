import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductForm from './ProductForm'
import axios from 'axios'
import HomeButton from './HomeButton'

const UpdateProduct = () => {

    const {id} = useParams()
    const [productInfo, setProductInfo] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProductInfo(res.data)
                setLoaded(true)
            })
            .catch((err) => console.log(err))
    }, [])

    const handleSubmit = (state) => {
        const req = {
            title: state.title,
            price: state.price,
            description: state.description
        }
        axios.patch(`http://localhost:8000/api/products/${id}`, req)
            .then(res => {
                console.log(res.data)
                navigate(`/${id}`)
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        {
            loaded && <ProductForm productInfo={productInfo} handleSubmit={handleSubmit}/> 
        }
        <div>
            
            <HomeButton/>
        </div>
    </div>
  )
}

export default UpdateProduct