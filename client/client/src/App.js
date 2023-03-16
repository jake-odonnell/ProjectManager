import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product';
import UpdateProduct from './components/UpdateProduct';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/home' element={ <Home/>}/>
          <Route path='/:id' element = { <Product/>}/>
          <Route path='/update/:id' element = { < UpdateProduct /> } />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;