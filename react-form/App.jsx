import React, { useReducer, useState } from 'react';
import './App.css';


const formReducer = (state, data) => {
  console.log('state', { state, data })
  const { name, value } = data
  return {
    ...state,
    [name]: value
  }

  // switch(type){
  //   case 'ADD_TO_CART':
  //     //logic to add to  cart here 
  //     return 
  //   case 'REMOVE_FROM_CART':
  //       //logic to remove item fromc art here 
  //   return 

  // }

}

function App() {
  const [submitting, setSubmitting] = useState(false)
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: ''
  // })

  const [formData, dispatch] = useReducer(formReducer, {})


  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true)
    // alert('You have submitted the form')

    setTimeout(() => {
      //request is successfull
      setSubmitting(false)
    }, 3000)


  }
  // const handleFormChange = (event) => {
  //   // console.log(event.target.name)
  //   if (event.target.name === 'name') {
  //     setFormData({ ...formData, name: event.target.value })
  //   } else if (event.target.name === 'email') {
  //     setFormData({ ...formData, email: event.target.value })
  //   }
  // }

  const handleFormChange = (event) => {
    dispatch({
      name: event.target.name,
      value: event.target.value
    })
  }

  console.log('formData', formData)

  return (
    <div className='wrapper'>
      <h1>Gift Items</h1>
      {submitting && <div> Submitting Form ... </div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name='name' onChange={handleFormChange} />
          </label>
          <label>
            <p>Email</p>
            <input name='email' onChange={handleFormChange} />
          </label>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App