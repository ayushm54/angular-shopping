import { CartActionTypes, CartActions } from './cart.actions';
import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
} from "./cart.utils";

export interface CartState {
    hidden: boolean,
    cartItems: []
}

const INITIAL_STATE: CartState = {
    hidden: true,
    cartItems: []
};

export const cartReducer: (currentState: CartState, action: CartActions) => CartState = (
    currentState = INITIAL_STATE,
    action: CartActions
) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...currentState,
                hidden: !currentState.hidden,
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...currentState,
                cartItems: addItemToCart(currentState.cartItems, action.payload),
            };

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...currentState,
                cartItems: clearItemFromCart(currentState.cartItems, action.payload),
            };

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...currentState,
                cartItems: removeItemFromCart(currentState.cartItems, action.payload),
            };

        default:
            return currentState;
    }
};