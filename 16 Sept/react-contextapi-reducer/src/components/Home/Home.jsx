import React, { useEffect, useState } from 'react';
import './Home.css'
import Product from './Product/Product';

const url = 'https://fakestoreapi.com/products';

function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchProducts()
    }, [])


    async function fetchProducts() {
        const reponse = await fetch(url);
        const products = await reponse.json();
        setProducts(products);
        setLoading(false);
        console.log(products)
    }

    if (loading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div className='home'>

            <div className='home_rows'>
                {products.map(product => (
                    <div className='home_row' key={product.id}>
                        <Product
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            rating={Math.round(product.rating.rate)}
                            image={product.image}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home