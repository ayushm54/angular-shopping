import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { getCartItems } from '../store/cart/cart.selector';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent implements OnInit {

  cartItems: any;
  cartItemsSubscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cartItemsSubscription = this.store.pipe(select(getCartItems)).subscribe((cartItems: any) => {
      this.cartItems = cartItems;
    })
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription?.unsubscribe();
  }
}
