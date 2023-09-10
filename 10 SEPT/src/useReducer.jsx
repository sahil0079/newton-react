import React, { useReducer, useState } from 'react'

function reducer(state, action) {
    //for updating state
    // console.log(state)
    console.log('action', action)
    switch (action.type) {
        case 'CHANGED_NAME':
            return {
                name: action.payload,
                age: state.age
            }
        case 'INCREMENT_AGE':
            return {
                name: state.name,
                age: state.age + 1
            }
        default:
            return state
    }
    // throw Error('Unknown action: ' + action.type)
}

const initialState = { name: ' John', age: 30 }
function App() {

    const [state, dispatch] = useReducer(reducer, initialState)


    console.log(state)

    function handleInputChange(e) {

        //dispatch an action
        dispatch({
            type: 'CHANGED_NAME',
            payload: e.target.value

        })
    }

    function handleButtonClicked() {
        dispatch({ type: 'INCREMENT_AGE' })
    }

    console.log('App rendered')

    return (
        <div>
            <input value={state.name} onChange={handleInputChange} />
            <button onClick={handleButtonClicked} >Increment Age</button>
            <h3>Hello, {state.name}. You are {state.age} years old</h3>
        </div>
    )
}

export default App