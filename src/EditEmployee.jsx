import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditEmployee() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [department, setDepartment] = useState("")

    useEffect(() => {
        if (!id) return;

        const url = `http://localhost:3000/employee/${id}`
        axios.get(url)
            .then((res) => {
                console.log("Fetched Employee Data:", res.data)

                // If the response is an array, take the first item. 
                // If it's an object, take it directly.
                const employee = Array.isArray(res.data) ? res.data[0] : res.data;

                // Ensure we are setting strings to avoid uncontrolled input warnings
                setName(employee?.name || "")
                setSalary(employee?.salary || "")
                setDepartment(employee?.department || "")
            })
            .catch((err) => {
                console.error("Error fetching employee:", err)
            })
    }, [id])

    const updateEmployee = () => {
        const url = `http://localhost:3000/employee/${id}`
        const data = {
            name: name,
            salary: salary,
            department: department
        }
        axios.put(url, data)
            .then((res) => {
                console.log(res.data)
                alert(`Employee updated successfully`)
                navigate(`/employees`)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <h1 className="text-center">Edit Employee</h1>
            <div className="form-container">
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                <input type="text" placeholder="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                <button className="btn-primary" type="submit" onClick={updateEmployee}>Update Employee</button>
            </div>
        </div>
    )
}
