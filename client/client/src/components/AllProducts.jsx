import React from 'react'
import {Link} from 'react-router-dom'

const AllProducts = ({products, setProducts}) => {


  return (
    <div className='border-top pt-3'>
        <ul className='list-unstyled'>
            {
                products.map( (item, index) => 
                    <li key = { index }><Link to={`/${item._id}`}> { item.title } </Link></li>
                )
            }
        </ul>
    </div>
  )
}

export default AllProducts