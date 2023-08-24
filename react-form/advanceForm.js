import React, { useReducer, useState } from 'react';
import './App.css';


const formReducer = (state, data) => {
    console.log('state', { state, data })

    if (data.reset) {
        return {
            name: "",
            count: 0,
            gift: "",
            'gift-wrap': false,
        }
    }
    const { name, value } = data
    return {
        ...state,
        [name]: value
    }

}

function App() {
    const [submitting, setSubmitting] = useState(false)
    const [formData, dispatch] = useReducer(formReducer, {})


    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true)
        // alert('You have submitted the form')


        setTimeout(() => {
            //request is successfull
            setSubmitting(false)
            dispatch({
                reset: true
            })
        }, 5000)


    }
    const handleFormChange = (event) => {

        // const isCheckbox = event.target.name === 'gift-wrap'
        const isCheckbox = event.target.type === 'checkbox'

        // console.log('checked', event.target.type)
        // console.log('checked', {
        //   name: event.target.name,
        //   checked: event.target.checked,
        //   isCheckbox
        // })
        dispatch({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value,
        })
    }

    console.log('formData', formData)

    return (
        <div className='wrapper'>
            <h1>Gift Items</h1>
            {submitting && (
                <div>
                    You have submitted the following:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li><strong>{name}</strong> : {value.toString()} </li>
                        ))}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Name</p>
                        <input name='name' value={formData.name || ""} onChange={handleFormChange} />
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Gifts</p>
                        <select name='gift' value={formData.gift || ""} onChange={handleFormChange} >
                            <option value="">--Please choose an option--</option>
                            <option value="iphone">Iphone</option>
                            <option value="ipods">Ipods</option>
                            <option value="mac">Mac</option>
                            <option value="pc">Pc</option>
                        </select>
                    </label>
                    <label>
                        <p>Count</p>
                        <input type='number' name='count' step='1' value={formData.count || ""} onChange={handleFormChange} />
                    </label>
                    <label>
                        <p>Gift Wrap</p>
                        <input type='checkbox' name='gift-wrap' disabled={formData.gift !== 'iphone'} checked={formData['gift-wrap'] || false} onChange={handleFormChange} />
                    </label>

                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default App