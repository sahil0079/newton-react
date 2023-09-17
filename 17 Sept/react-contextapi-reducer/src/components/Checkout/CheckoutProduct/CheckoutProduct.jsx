import React from 'react';
import { useStateValue } from '../../../context/StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating }) {

    const [_, dispatch] = useStateValue();

    function removeFromCart() {
        //dispatch an action

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                id
            }
        })


    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' width={200} src={image} />
            <div>
                <p>{title}</p>
                <p>
                    <small>{price}</small>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating).fill().map((_) => (
                        <p> ⭐</p>

                    ))}
                </div>
                <button onClick={removeFromCart} >Remove from cart</button>
            </div>

        </div>
    )
}

export default CheckoutProduct