import React, { memo, useCallback, useMemo, useState } from 'react'




function Square({ params, onClick }) {
    console.log(`Square rendered ${params.color}`)
    return (
        <div onClick={onClick} style={{ width: 100, height: 100, backgroundColor: params.color }} ></div>

    )
}
const MemoizedSquare = React.memo(Square)

// const MemoizedSquare = memo(Square, (prevProps, nextProps) => {
//     // console.log(prevProps.params.color === nextProps.params.color)

//     return prevProps.params.color === nextProps.params.color;
// });



function App() {

    const [appRenderIndex, setAppRenderIndex] = useState(0);
    const [color, setColor] = useState('red');

    console.log(`App rendered ${appRenderIndex}`);

    const params = useMemo(() => ({ color }), [color]);

    const onClick = useCallback(() => { }, [])

    //bad way

    // const value = useMemo(() => num1 + num2, [num1,num2]);

    //good way

    // const value = num1 + num2;

    // //bad way
    // const value = useMemo(() => `${firstName} ${lastName}`, [firstName, lastName]);

    // //good way
    // const value = `${firstName} ${lastName}`;


    //good way
    // const value = useMemo(
    //     () => numbers.reduce((acc,value) => acc, value, 0),
    //     [numbers]
    // )


    //good way
    // const person = useMemo(
    //     () => ({
    //         firstName, lastName, fullName: `${firstName} ${lastName}`
    //     }),
    //     [firstName,lastName]
    // )


    return (
        <div className='app'>
            <h1>App</h1>
            <div>
                <button onClick={() => setAppRenderIndex((index) => index + 1)} >Re-render app</button>
            </div>
            <button onClick={() => setColor(color == 'red' ? 'green' : 'red')} >Change Color</button>
            <div>
                {/* <MemoizedSquare color={color} /> */}

                <MemoizedSquare params={params} onClick={onClick} />
            </div>
        </div>
    )
}

export default App