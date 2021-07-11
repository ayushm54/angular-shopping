import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { getCartItems } from '../store/cart/cart.selector';
import {ToggleCartHidden } from '../store/cart/cart.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent implements OnInit {

  cartItems: any;
  cartItemsSubscription: Subscription;

  constructor(private store: Store<AppState>,
              private router: Router) { }

  ngOnInit(): void {
    this.cartItemsSubscription = this.store.pipe(select(getCartItems)).subscribe((cartItems: any) => {
      this.cartItems = cartItems;
    })
  }

  gotToCheckout(){
    this.router.navigate(['checkout']);
    this.store.dispatch(new ToggleCartHidden());
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription?.unsubscribe();
  }
}
