import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { AddItemToCart, RemoveItem, ClearItemFromCart } from '../store/cart/cart.actions';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit {

  @Input() cartItem: any;
  
  constructor(private store: Store<AppState>){ }

  ngOnInit(): void {}

  incrementItemQuantity(){
    this.store.dispatch(new AddItemToCart(this.cartItem));
  }

  decrementItemQuantity(){
    this.store.dispatch(new RemoveItem(this.cartItem));
  }

  clearItemFromCart(){
    this.store.dispatch(new ClearItemFromCart(this.cartItem));
  }

}
