import React, {useState} from 'react'
import axios from 'axios'


const ProductForm = ({productInfo, handleSubmit}) => {

    const [state, setState] = useState(productInfo)

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleForm = (e) => {
        e.preventDefault()
        handleSubmit(state)
    }


  return (
    <div className="my-3">
        <form onSubmit={handleForm} className="col-6 m-auto border shadow">
            <h1 className="text-success">Product Details</h1>
            <div>
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" name="title" className="form-control" value={state.title} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="price" className="form-label">Price:</label>
                <input type="number" name="price" className="form-control" value={state.price} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="description" className="form-label">Description:</label>
                <input type="text" name="description" className="form-control" value={state.description} onChange={handleChange}/>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary m-2"/>
        </form>
    </div>
  )
}

export default ProductForm