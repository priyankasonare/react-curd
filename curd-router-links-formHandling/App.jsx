import React from 'react'
import Cube from './Cube'
import Add from './Add'
import Products from './Products'
import AddProduct from './AddProduct'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//npm i react-router-dom

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/product">Products</Link> |
        <Link to="/add-product">Add Product</Link> |
        <Link to="/add">Add</Link> |
        <Link to="/cube">Cube</Link>
      </nav>
      <a href="/product"> Products (anchor tag)</a>
      <Routes>
        <Route path="/product" element={<Products />} />
        <Route path="/add" element={<Add />} />
        <Route path="/cube" element={<Cube />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App