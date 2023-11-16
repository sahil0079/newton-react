// import React, { useState } from 'react'
// import ProductPage from './ProductPage';

// function App() {
//     const [isDark, setIsDark] = useState(false);

//     console.log(`App rendered`)
//     return (
//         <>
//             <label>
//                 <input
//                     type='checkbox'
//                     checked={isDark}
//                     onChange={(e) => setIsDark(e.target.checked)}
//                 />
//                 Dark Mode
//             </label>
//             <hr />
//             <ProductPage
//                 productId={234}
//                 theme={isDark ? 'dark' : 'light'}
//             />
//         </>
//     )
// }

// export default App

//when not to use useeffect
import React, { useEffect, useState } from 'react'

function Form({ userId }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    //remove state and effect
    //bad way
    // const [fullName, setFullName] = useState('');

    // useEffect(() => {
    //     setFullName(firstName + ' ' + lastName);
    // }, [firstName, lastName])

    //good way is to calculate during rendering
    // const fullName = firstName + ' ' + lastName;
    // console.log(fullName)
    // console.log('Form rendered')


    //bad way 
    //   useEffect(() => {
    //     setFullName('');
    // }, [userId])

    //use unique keys to reset the state




    return <h3>Form</h3>

}

function App() {
    return (
        <div>
            <h1>App</h1>
            <Form />
            <Form />
        </div>
    )
}

export default App