import React, { useEffect, useState } from 'react'

//useEffect hook



function App() {
  const [counter, setCounter] = useState(0);

  const [anotherCounter, setAnotherCounter] = useState(0)

  // useEffect(function, dependencyArray)

  //case 1 => when u pass an empty dependency array, useeefect will run only once
  //when the component mounts

  // useEffect(function () {
  //   console.log('Useeffect runs')
  //   setCounter(counter + 1)

  // }, [])


  //case 2 => when u dont pass a dependecy array it will run on every render of the component

  // useEffect(function () {
  //   console.log('Useeffect runs')
  //   setCounter(counter + 1)


  // })

  //case 3 => where u r passing the dependencies in the array

  // useEffect(function () {
  //   console.log('Useeffect runs')

  // }, [anotherCounter, counter])

  // console.log('App component rendered')




  return (
    <div style={{
      display: 'grid',
      placeItems: 'center'
    }}>
      <h1>Counter : {counter}</h1>
      <h2>Another Counter : {anotherCounter}</h2>

      <button onClick={() => setCounter(counter + 1)} >increment</button>

      <button onClick={() => setAnotherCounter(anotherCounter + 1)} >increment another counter</button>

    </div>

  )
}

export default App