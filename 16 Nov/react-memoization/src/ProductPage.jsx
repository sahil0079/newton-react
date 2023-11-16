
import React, { useCallback } from 'react'
import CheckoutForm from './CheckoutForm'



function ProductPage({ productId, theme }) {

    // function handleSubmit(orderDetails) {
    //     post('/product' + productId, { orderDetails })
    // };

    console.log(`ProductPage rendered`)


    const handleSubmit = useCallback((orderDetails) => {
        post('/product' + productId, { orderDetails })
    }, [productId]);

    return (
        <div className={theme}>
            <CheckoutForm onSubmit={handleSubmit} />
        </div>
    )
}

export default ProductPage


function post(url, data) {
    //consider that we r making an api call
    console.log('POST /' + url);
    console.log('data', data)
}