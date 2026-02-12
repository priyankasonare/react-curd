import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

export default function Employees() {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        const url = "http://localhost:3000/employee"
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                setEmployees(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getEmployees()
    }, [])


    const deleteEmployee = (id) => {
        // Optimistic update: Remove from UI immediately
        const previousEmployees = [...employees];
        setEmployees(prev => prev.filter(emp => emp.id !== id));

        const url = `http://localhost:3000/employee/${id}`
        axios.delete(url)
            .then((res) => {
                alert(`Employee ${id} deleted successfully`)
                // Delay refetch to avoid race conditions/server crash
                setTimeout(() => {
                    getEmployees()
                }, 500);
            })
            .catch((err) => {
                console.log(err)
                // Rollback on error
                setEmployees(previousEmployees);
                alert("Failed to delete employee. Please try again.");
            })
    }

    return (
        <div className="container">
            <h1>Employees</h1>

            <div className="table-container">
                <table>
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
                                    <td className="actions">
                                        <button className="btn-danger" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                        <Link to={`/edit-employee/${employee.id}`}><button className="btn-edit"> Edit</button></Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}