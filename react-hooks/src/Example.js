import React from 'react'
import { useState } from 'react'





function App() {

    //structuring of data 

    //pointer => x , y coordinates

    //groupin related data

    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);

    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    })

    return (
        <div onPointerMove={e => {
            // setX(e.clientX)
            // setY(e.clientY)

            setCoordinates({
                x: e.clientX,
                y: e.clientY
            })

        }}
            style={{
                position: 'relative',
                width: '100vh'
            }}
        >

            <div style={{
                position: 'absolute',
                backgroundColor: 'brown',
                // transform: `translate(${x}px, ${y}px)`,
                transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,

                left: -12,
                top: -12,
                width: 30,
                height: 30

            }}>
                asdasd
            </div>

        </div>
    )
}

export default App