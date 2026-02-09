import React, { useEffect, useState } from 'react'
import axios from "axios"
import Product from './Product'

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = "https://fakestoreapi.com/products"
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteProduct = (id) => {
        const url = `https://fakestoreapi.com/products/${id}`
        axios.delete(url)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
                alert(`Product ${id} deleted successfully`)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            {products.map((product) => {
                return (
                    <Product
                        key={product.id}
                        product={product}
                        onDelete={deleteProduct}
                    />
                )
            })}
        </div>
    )
}