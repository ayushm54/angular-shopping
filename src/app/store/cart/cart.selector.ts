import { CartState } from './cart.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// getCartState will select and return the cart slice fromt he state
export const getCartState = createFeatureSelector<CartState>('cart');

export const getCartItems = createSelector(
    getCartState,
    (state: CartState) => state.cartItems
);

export const getCartCount = createSelector(
    getCartItems,
    (cartItems: any) => {
        return cartItems.reduce(
            (accumulatedQuantity, cartItem: any) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
    }
);

export const getCardHidden = createSelector(
    getCartState,
    (state: CartState) => state.hidden
);

export const getCartTotal = createSelector(
    getCartItems,
    (cartItems: any) => {
        return cartItems.reduce(
            (accumulatedTotal, cartItem: any) =>
                accumulatedTotal + cartItem.quantity * cartItem.price,
            0
        )
    }
);