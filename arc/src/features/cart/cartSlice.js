import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (cart, action) => [...cart, action.payload],
        increaseQty: (cart, action) => {
            return cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
        },
        decreaseQty: (cart, action) => {
            return cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            });
        },
        removeItem: (cart, action) => {
            return cart.filter((item) => (item.id !== action.payload));
        }
    },
}
);

export default cartSlice.reducer;

export const { addToCart, increaseQty, decreaseQty, removeItem } = cartSlice.actions;