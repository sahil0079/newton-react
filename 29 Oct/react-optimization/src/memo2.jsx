import React, { memo, useState } from 'react'




function Square({ params }) {
    console.log(`Square rendered ${params.color}`)
    return (
        <div style={{ width: 100, height: 100, backgroundColor: params.color }} ></div>

    )
}
// const MemoizedSquare = React.memo(Square)

const MemoizedSquare = memo(Square, (prevProps, nextProps) => {
    // console.log(prevProps.params.color === nextProps.params.color)

    return prevProps.params.color === nextProps.params.color;
});


function App() {

    const [appRenderIndex, setAppRenderIndex] = useState(0);
    const [color, setColor] = useState('red');

    console.log(`App rendered ${appRenderIndex}`);



    return (
        <div className='app'>
            <h1>App</h1>
            <div>
                <button onClick={() => setAppRenderIndex((index) => index + 1)} >Re-render app</button>
            </div>
            <button onClick={() => setColor(color == 'red' ? 'green' : 'red')} >Change Color</button>
            <div>
                {/* <MemoizedSquare color={color} /> */}

                <MemoizedSquare params={{ color }} />
            </div>
        </div>
    )
}

export default App