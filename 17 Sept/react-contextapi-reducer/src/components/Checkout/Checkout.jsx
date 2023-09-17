import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

function Checkout() {

    const [{ cart }] = useStateValue();

    console.log('cart', cart)


    return (
        <div className='checkout'>
            <div className='checkout_left'>
                {cart?.length == 0 ? (
                    <div>
                        <h1>Your Shopping cart is empty</h1>
                        <p>
                            You have no items left. To buy just click on 'Add tp cart' next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        {cart?.map(({ id, title, image, price, rating }) => (
                            <CheckoutProduct
                                key={id}
                                id={id}
                                title={title}
                                image={image}
                                price={price}
                                rating={rating}

                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Checkout