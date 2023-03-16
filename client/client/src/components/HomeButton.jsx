import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeButton = () => {
    const navigate = useNavigate()

    const clickHandler = () => {navigate('/home')}
  return (
    <div className='mt-3'>
        <button className = ' btn btn-primary' onClick={clickHandler}>Home</button>
    </div>
  )
}

export default HomeButton