import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe.button.component';

import { 
    selectCartItems, 
    selectCartTotal 
} from '../../redux/cart/cart.selectors';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer} from './chekout.styles';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span className=''>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span className=''>Descripton</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span className=''>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span className=''>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span className=''>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - cvv: 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);

