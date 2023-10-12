import React, { useEffect, useRef, useState } from 'react'


//useRef

//Use case :log the button clicks 


// export default function ButtonLogging() {
//     let count = 0;
//     const countRef = useRef(0);

//     console.log(countRef)

//     function handleClick() {
//         count++;
//         countRef.current++;
//         console.log(`Clicked ${countRef.current} times`);
//         console.log(`count variable`, count);


//     };
//     console.log('ButtonLogging rendered');
//     return <button onClick={handleClick}>Click Me</button>
// }

// function App() {
//     return (
//         <div>App</div>
//     )
// }

// export default App


//Use case :creating a stopwatch

//you can store  data of side effects like timerIds, socketIds etc inside the reference

// export default function Stopwatch() {
//     const timerIdRef = useRef(0);
//     const [count, setCount] = useState(0);

//     function handleStart() {

//         if (timerIdRef.current) {
//             return
//         }

//         timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);

//     };

//     function handleStop() {
//         clearInterval(timerIdRef.current);
//         timerIdRef.current = 0;
//     };

//     useEffect(() => {

//         return () => clearInterval(timerIdRef.current);
//     }, [])


//     return (
//         <div>
//             <div className='timer'>Timer: {count}s </div>
//             <div>
//                 <button onClick={handleStart} >Start</button>
//                 <button onClick={handleStop} >Stop</button>

//             </div>
//         </div>
//     )
// }
