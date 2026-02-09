import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function EditProduct() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {
        const url = `https://fakestoreapi.com/products/${id}`

        axios.get(url)
            .then(res => {
                console.log(res.data)
                const product = res.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
                setCategory(product.category)
                setImage(product.image)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const updateProduct = () => {
        const url = `https://fakestoreapi.com/products/1`
        const updateData = {
            title,
            description,
            category,
            price,
            image
        }

        axios.put(url, updateData)
            .then((response) => {
                console.log(response.data)
                alert(`Product ${id} is updated`)
                navigate(`/product`)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>EditProduct</h1>
            <br />
            <br />
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
            <br />
            <br />
            <button onClick={updateProduct} type="submit" >Update Product</button>
        </div>
    )
}
