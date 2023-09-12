import React, { createContext } from 'react'
import User from './components/User'


// React.createContext()  
export const UserContext = createContext()

console.log(UserContext)

function App() {
  const data = 'James Bond'
  return (
    <div>
      <UserContext.Provider value={data} >
        <User />
      </UserContext.Provider>
    </div>
  )
}

export default App