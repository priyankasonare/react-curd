import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Categories.css'

export default function Categories() {
    return (
        <div>
            <h1 className="main-heading">Categories</h1>

            <Link to="electronics">Electronics</Link> ||
            <Link to="clothing"> Clothing</Link>

            <h2 style={{ backgroundColor: "red", border: '1px' }}>child compenent is loaded here</h2>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
