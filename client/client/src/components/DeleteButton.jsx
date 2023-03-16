import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const DeleteButton = ({id}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res)
                navigate(`/home`)
            })
            .catch((err) => console.log(err))
        
    }
  return (
    <div>
        <button className='btn btn-danger m-3' onClick={handleClick}>Delete</button>
    </div>
  )
}

export default DeleteButton