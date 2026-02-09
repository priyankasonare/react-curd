import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function AddProduct() {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  // console.log(title)
  // console.log(price)
  // console.log(description)
  // console.log(category)

  const addProduct = () => {
    const url = "https://fakestoreapi.com/products"
    const data = {
      title: title,
      price: price,
      description: description,
      category: category
    }
    axios.post(url, data)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <br />
      <br />
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <br />
      <br />
      <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <br />
      <br />
      <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <br />
      <br />
      <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
      <br />
      <br />
      <button type="submit" onClick={addProduct}>Add Product</button>
    </div>
  )
}
