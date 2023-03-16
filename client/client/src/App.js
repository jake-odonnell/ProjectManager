import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product';

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/all')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/home' element={ <Home products={products} setProducts={setProducts}/>}/>
          <Route path='/:id' element = { <Product/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;