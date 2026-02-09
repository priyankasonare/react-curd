// add 2 number by taking input from form

import React from 'react'
import { useState } from 'react'

export default function Add() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(1);
    const [sum, setSum] = useState(1);

    function add() {
        // alert("hello");
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);
        let sum = n1 + n2;
        setSum(sum);
    }

    return (
        <div>
            {/* <h1>Add 2 numbers</h1> */}
            <input placeholder='enter a 1st number' onChange={(e) => setNum1(e.target.value)} />
            <br />
            <br />
            <input placeholder='enter a 2nd number' onChange={(e) => setNum2(e.target.value)} />
            <br />
            1st Number: {num1}
            <br />
            2nd Number: {num2}
            <br />
            Sum: {sum}
            <br />
            <button onClick={add}>calculate</button>
        </div>
    )
}