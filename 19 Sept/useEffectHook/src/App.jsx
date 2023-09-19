import React, { useEffect, useState } from 'react';


//Dependecies argument


function Counter() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   // Runs after every render
  //   console.log('Counter UseEffect Runs')

  // })
  // useEffect(() => {
  //   // Runs ONCE after initial Render
  //   console.log('Counter UseEffect Runs')

  // }, [])

  // useEffect(() => {
  //   // Runs ONCE whenever dependencies changes
  //   console.log('Counter UseEffect Runs')

  // }, [count, show])



  useEffect(() => {
    console.log('useEffect runs')
    return () => {
      //Runs before umount phase
      console.log('Before Unmount')
    }
  }, [])


  console.log('Counter Renders')
  console.log('show', show)
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={() => setCount(count + 1)} >increment</button>
      <button onClick={() => setShow(!show)}>Change</button>
    </div>
  )
}

// function Message({ message }) {

//   // useEffect(() => {
//   //   const id = setInterval(() => {
//   //     console.log(message)
//   //   }, 2000)

//   //   //cleanup
//   //   return () => {
//   //     clearInterval(id);
//   //   }

//   // }, [message])


//   return <h2>logging to console {message}</h2>
// }

function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [message, setMessage] = useState('Hello World')

  return (
    <div>
      {showCounter && <Counter />}
      <div>
        <button onClick={() => setShowCounter(true)} >Mount Counter</button>
        <button onClick={() => setShowCounter(false)}>UnMount Counter</button>

      </div>
      {/* <Message message={message} /> */}
    </div>
  )
}

export default App