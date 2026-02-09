import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({ product, onDelete }) {
    const { id, title, image, price, category, description } = product
    // console.log(product)

    return (
        <div>
            <img src={image} height={100} width={100} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{category}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
            <Link to={`/edit-product/${id}`}>
                <button>Edit</button>
            </Link>
            <hr></hr>
        </div >
    )
}   
