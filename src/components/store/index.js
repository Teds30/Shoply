import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cart'
import uiSlice from './slices/ui-slice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiSlice.reducer
    }
})

export default store