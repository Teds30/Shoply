import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalAmount: 0,
    changed: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items
            state.totalAmount = action.payload.totalAmount
        },
        add(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );

            state.totalAmount = state.totalAmount + newItem.price;
            state.changed = true;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    itemid: newItem.itemid,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                    // image: wprops.item.image,
                    image: newItem.image,
                    color: newItem.color,
                    size: newItem.size,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalAmount =
                    existingItem.totalAmount + newItem.price;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
            }
        },
        remove(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            state.totalAmount = state.totalAmount - existingItem.price;
            state.changed = true;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
