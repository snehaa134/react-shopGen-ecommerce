import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";


const initialState = {
    cartItem: []
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cartItem.find((item) => item?.id === product?.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartItem.push(
                    {
                        ...product,
                        quantity: 1
                    }
                )
            }
        },


        increaseQuantity: (state, action) => {
            const findProduct = state.cartItem.find((item) => item?.id == action.payload)
            console.log("increaseQuantity called");
           
            if (findProduct && findProduct.quantity < findProduct.stock) {
                findProduct.quantity += 1;
            } else {
                toast.error("Out of Stock");
            }

        },
        decreaseQuantity: (state, action) => {
            const findProduct = state.cartItem.find((item) => item?.id === action.payload)
            if (findProduct) {
                findProduct.quantity -= 1;

                if (findProduct.quantity === 0) {
                    state.cartItem = state.cartItem.filter((item) => item?.id != action.payload)
                }
            }
        },
        removeProduct: (state, action) => {
            state.cartItem = state.cartItem.filter((item) => item?.id != action.payload)
        }
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeProduct } = CartSlice.actions;
export default CartSlice.reducer;
