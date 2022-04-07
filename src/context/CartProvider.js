import React, { useReducer } from 'react'

import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        // updating the total amount in cart
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity

        // if the item added is already in the cart
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id) //this will return the index of that item
        
        // declaring a new constant that values the item found
        const existingCartItem = state.items[existingCartItemIndex]
        
        let updatedItems

        if(existingCartItem) {
            // updating the item
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem

        } else {
            // if the added item is not in the cart
            updatedItems = state.items.concat(action.item)

        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

        
    }

    if(action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id)
        
        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        
        let updatedItems
        if(existingItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (enteredItem) => {
        dispatchCartAction({ type: 'ADD', item: enteredItem})
    }
    const removeItemToCartHandler = (enteredID) => {
        dispatchCartAction({ type: 'REMOVE', id: enteredID})
    }

    const cartCtx = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartCtx}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider