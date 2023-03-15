import React, {useState} from 'react'
import axios from 'axios'


const ProductForm = () => {

    const [state, setState] = useState({
        title: '',
        price: 0,
        description: ''
    })

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleForm = (e) => {
        e.preventDefault()
        console.log(state)

        axios.post('http://localhost:8000/api/products/new', state)
            .then(res => {
                console.log('Done')
            })
            .catch(err => console.log(err))
    }


  return (
    <div className="mt-3">
        <form onSubmit={handleForm} className="col-6 m-auto border shadow">
            <h1 className="text-success">Add a Product</h1>
            <div>
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" name="title" className="form-control" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="price" className="form-label">Price:</label>
                <input type="number" name="price" className="form-control" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="description" className="form-label">Description:</label>
                <input type="text" name="description" className="form-control" onChange={handleChange}/>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary m-2"/>
        </form>
    </div>
  )
}

export default ProductForm