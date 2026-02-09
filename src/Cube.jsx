import React, { useState } from 'react'

export default function Cube() {

    const [num, setNum] = useState(1);
    const [cube, setCube] = useState(1);

    function calculateCube() {
        // alert("hello");
        let number = parseInt(num);
        let cube = number * number * number;
        setCube(cube);
    }

    return (
        <div>
            <input placeholder='enter a number' onChange={(e) => setNum(e.target.value)} />
            <br />
            Number: {num}
            <br />
            Cube: {cube}
            <br />
            <button onClick={calculateCube}>calculate</button>
        </div>
    )
}
