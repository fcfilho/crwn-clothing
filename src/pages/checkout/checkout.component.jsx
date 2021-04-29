import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span className=''>Product</span>
            </div>
            <div className='checkout-block'>
                <span className=''>Descripton</span>
            </div>
            <div className='checkout-block'>
                <span className=''>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span className=''>Price</span>
            </div>
            <div className='checkout-block'>
                <span className=''>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                cartItem.name
            )
        }

        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
