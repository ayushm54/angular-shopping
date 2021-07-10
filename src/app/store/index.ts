import { ActionReducerMap } from '@ngrx/store';
import { cartReducer, CartState } from './cart/cart.reducer';

export interface AppState {
    cart: CartState
}

export const reducers: ActionReducerMap<AppState> = {
    cart: cartReducer
};
