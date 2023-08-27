import React, { useEffect, useState } from 'react'


const url = 'https://jsonplaceholder.typicode.com/users';




function App() {
  const [users, setUsers] = useState([])


  const fetchUsers = async () => {

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
    setUsers(data)

  }

  useEffect(() => {
    //run once when the component mounts
    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Users</h1>

      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App