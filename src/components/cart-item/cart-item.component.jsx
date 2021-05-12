import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer, CartItemName } from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <CartItemName>{name}</CartItemName>
            <CartItemName>
                {quantity} x ${price}
            </CartItemName>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;