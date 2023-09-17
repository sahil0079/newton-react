
import React, { createContext, useContext, useReducer } from 'react';

//react context api steps

//global data using context api by creating context object
//provide the value using provider component that is present inside context object
//use use context hook to get the state from it

export const StateContext = createContext();

function StateProvider({ children, reducer, initialState }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext);

export default StateProvider