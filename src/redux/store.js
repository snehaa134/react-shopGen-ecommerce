import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../redux/cartSlice'
import { ProductApi } from '../services/productApi/productApiSlice'

export const Store = configureStore({
  reducer: {
    cart: CartReducer,
    [ProductApi.reducerPath]: ProductApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    ProductApi.middleware)
})


