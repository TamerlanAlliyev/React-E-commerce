import { configureStore } from '@reduxjs/toolkit'
import App from './slices/appSlice'
import productsReducer from './slices/ProductsSlice'
import appReducer from './slices/appSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        products: productsReducer,

    },
})