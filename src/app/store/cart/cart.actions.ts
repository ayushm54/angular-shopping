import { Action } from '@ngrx/store';

export enum CartActionTypes {
    TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART",
}

export class ToggleCartHidden implements Action {
  readonly type = CartActionTypes.TOGGLE_CART_HIDDEN;
}

export class AddItemToCart implements Action {
  readonly type = CartActionTypes.ADD_ITEM;
  constructor(public payload: any) {}
}

export class ClearItemFromCart implements Action {
  readonly type = CartActionTypes.CLEAR_ITEM_FROM_CART;
  constructor(public payload: any) {}
}

export class RemoveItem implements Action {
  readonly type = CartActionTypes.REMOVE_ITEM;
  constructor(public payload: any) {}
}

export type CartActions = ToggleCartHidden | AddItemToCart | ClearItemFromCart | RemoveItem;