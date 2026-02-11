import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Employees() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const url = "http://localhost:3000/employee"
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                setEmployees(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const deleteEmployee = (id) => {
        const url = `http://localhost:3000/employee/${id}`
        axios.delete(url)
            .then((res) => {
                console.log(res.data)
                setEmployees(res.data)
                alert(`Employee ${id} deleted successfully`)

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Employees</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <button onClick={() => deleteEmployee(employee.id)}>Delete</button> ||
                                    <button> Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}