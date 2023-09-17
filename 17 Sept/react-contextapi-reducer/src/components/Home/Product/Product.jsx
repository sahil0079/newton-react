import React from 'react';
import { useStateValue } from '../../../context/StateProvider';
import './Product.css';

function Product({ id, title, price, rating, image }) {
    const [_, dispatch] = useStateValue();

    function addToCart() {
        //dispatch add to cart action
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id,
                title,
                price,
                rating,
                image
            }
        });


    }

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <strong>$</strong>
                    <span>{price} </span>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map(_ => (
                            <p> ⭐</p>
                        ))
                    }

                </div>

            </div>
            <img src={image} />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product