import React, { useEffect, useState } from 'react'
import './App.css'

//custom hook for fetching data from an api

function useApiData(apiUrl) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();

  }, [apiUrl])


  return { data, loading, error };
}


function App() {

  const { data: posts } = useApiData('https://jsonplaceholder.typicode.com/posts');

  const { data: users } = useApiData('https://jsonplaceholder.typicode.com/users');
  const { data: comments } = useApiData('https://jsonplaceholder.typicode.com/comments	');
  const { data: albums } = useApiData('https://jsonplaceholder.typicode.com/albums	');


  console.log('data', { posts, users, comments, albums })


  return (
    <div className='app'>
      hello world
    </div>
  )
}

export default App