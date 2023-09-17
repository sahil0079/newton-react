import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import './Header.css';

function Header() {

    const [state] = useStateValue();

    console.log('state', state)
    return (
        <div className='header'>
            <div className='header_container'>
                <Link to='/'>
                    <img className='header_image' src='data:image/png;base64,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' alt='logo' />
                </Link>
                <div className='search_box'>
                    <input placeholder='Search a product' type='text' />
                </div>

            </div>
            <div className='header_right'>
                <Link to='/checkout'>
                    <div className='headerOption_basket'>

                        Cart <span>{state?.cart?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header