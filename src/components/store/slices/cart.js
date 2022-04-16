import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
    items: [],
    totalAmount: 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add(state, action) {

            const updatedTotalAmount = state.totalAmount + action.payload.item.price * action.payload.item.quantity

            const existingCartItemIndex = state.items.findIndex(
                item => item.id === action.payload.item.id)

            const existingCartItem = state.items[existingCartItemIndex]

            let updatedItems

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + action.payload.item.quantity
                }

                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem

            } else {
                updatedItems = state.items.concat(action.payload.item)

            }

            state.items = updatedItems
            state.totalAmount = updatedTotalAmount

        },
        remove(state, action) {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload)

            const existingItem = state.items[existingCartItemIndex]
            const updatedTotalAmount = state.totalAmount - existingItem.price

            let updatedItems
            if (existingItem.quantity === 1) {
                updatedItems = state.items.filter(item => item.id !== action.payload)
            } else {
                const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            }

            state.items = updatedItems
            state.totalAmount = updatedTotalAmount
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer