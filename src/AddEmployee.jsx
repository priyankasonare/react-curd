import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddEmployee() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [department, setDepartment] = useState("")

    // console.log(title)
    // console.log(price)
    // console.log(description)
    // console.log(category)

    const addEmployee = () => {
        const url = "http://localhost:3000/employee"
        const data = {
            name: name,
            salary: salary,
            department: department
        }
        axios.post(url, data)
            .then((res) => {
                console.log(res.data)
                alert(`Employee is added`)
                navigate(`/employees`)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <h1 className="text-center">Add Employee</h1>
            <div className="form-container">
                <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="salary" onChange={(e) => setSalary(e.target.value)} />
                <input type="text" placeholder="department" onChange={(e) => setDepartment(e.target.value)} />
                <button className="btn-primary" type="submit" onClick={addEmployee}>Add Employee</button>
            </div>
        </div>
    )
}
