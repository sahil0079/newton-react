import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import App from './App.jsx'
import './index.css'

//Counter 
//basic redux setup

//STORE => CONTAIN GLOBALIZED STATE

//ACTIONS => just describe what u want to do
//increment, decrement, reset

function increment() {
    return {
        type: 'INCREMENT'
    }
};
const actions = {
    increment: { type: 'INCREMENT' },
    decrement: { type: 'DECREMENT' },

}
function decrement() {
    return {
        type: 'DECREMENT'
    }
};


//REDUCER => pure function, executes the logic, update the state

function counter(state = 0, action) {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

let store = createStore(counter);

// console.log(store);

//display the output on the console

store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(actions.increment);
store.dispatch(increment());

store.dispatch(increment());

store.dispatch(decrement());




ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <App />

    // </React.StrictMode>,
)
