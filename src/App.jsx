import React from 'react'
import Cube from './Cube'
import Add from './Add'
import Products from './Products'
import AddProduct from './AddProduct'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import EditProduct from './EditProduct'
import Categories from './Categories'
import Electronics from './Electronics'
import Clothing from './Clothing'
import { Outlet } from 'react-router-dom'
import Employees from './Empolyees'
import AddEmployee from './AddEmployee'

//npm i react-router-dom

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/employees">Employees</Link> |
        <Link to="/add-employee">Add Employee</Link> |

        {/* <Link to="/product">Products</Link> |
        <Link to="/add-product">Add Product</Link> |
        <Link to="/add">Add</Link> |
        <Link to="/cube">Cube</Link> |
        <Link to="/categories">Categories</Link> | */}
      </nav>

      {/* <a href="/product"> Products (anchor tag)</a> */}
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/add-employee" element={<AddEmployee />} />

        {/* <Route path="/product" element={<Products />} />
        <Route path="/add" element={<Add />} />
        <Route path="/cube" element={<Cube />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />

        <Route path="/categories" element={<Categories />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="clothing" element={<Clothing />} />
        </Route>
        <Route /> */}
      </Routes>
      <Outlet />

    </BrowserRouter >
  )
}

export default App