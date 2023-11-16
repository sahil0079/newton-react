import React, { useState } from 'react'

const CheckoutForm = React.memo(({ onSubmit }) => {
    const [count, setCount] = useState(0);



    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const orderDetails = {
            ...Object.fromEntries(formData),
            count
        };
        // console.log('orderDetails', orderDetails)
        onSubmit(orderDetails);

    }

    let startTime = performance.now();

    while (performance.now() - startTime < 1000) {
        //do nothing for 500ms 
        //we r making this component 
    }

    console.log(`[making component slow] rendering CheckoutForm rendered`)

    console.log(`-----------------------------------------`)


    return (
        <form onSubmit={handleSubmit} >
            <p><b>Note: Checkout Form</b> is slowed down </p>
            <label>
                Num of items:
                <button type='button' onClick={() => setCount(count - 1)} >- </button>
                {count}
                <button type='button' onClick={() => setCount(count + 1)}>+ </button>



            </label>
            <label>
                Street:
                <input name='street' />
            </label>
            <label>
                City:
                <input name='city' />
            </label>
            <label>
                Postal Code:
                <input name='zipCode' />
            </label>
            <button type='submit'>Submit</button>

        </form>
    )
})

export default CheckoutForm