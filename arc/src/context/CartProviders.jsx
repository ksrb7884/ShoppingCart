import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

function reducer(cart, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            return [...cart, action.payload];
        }
        case "INCREASE_QTY": {
            return cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
        }
        case "DECREASE_QTY": {
            return cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            });
        }
        case "REMOVE_ITEM": {
            return cart.filter((item) => (item.id !== action.payload.id));
        }
    }
    return state;
}

function CartProviders({ children }) {
    const [cart, dispatch] = useReducer(reducer, []);

    function addToCart(newItem) {
        dispatch({
            type: "ADD_ITEM",
            payload: newItem
        });
    }

    function increaseQty(id) {
        dispatch({
            type: "INCREASE_QTY",
            payload: { id: id }
        });
    }

    function decreaseQty(id) {
        dispatch({
            type: "DECREASE_QTY",
            payload: { id: id }
        });
    }

    function removeItem(id) {
        dispatch({
            type: "REMOVE_ITEM",
            payload: { id: id }
        });
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, removeItem }}>
            <div>{children}</div>
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export default CartProviders;