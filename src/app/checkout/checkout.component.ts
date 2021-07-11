import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { getCartItems, getCartTotal } from '../store/cart/cart.selector';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems: any;
  cartTotal: any;
  payButtonClass: any;

  isLoading = false;

  cartItemsSubscription: Subscription;
  cartTotalSubscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadStripe();
    this.cartItemsSubscription = this.store.pipe(select(getCartItems)).subscribe((cartItems: any) => {
      this.cartItems = cartItems;
    });

    this.cartTotalSubscription = this.store.pipe(select(getCartTotal)).subscribe((cartTotal: any) => {
      this.cartTotal = cartTotal;
      this.payButtonClass = cartTotal!=0 ? 'custom-button' : 'custom-button inactive';
    });

  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }

  makePayment(){
    let handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Angular Shopping',
      description: 'Stripe payment for Angular',
      amount: this.cartTotal*100
    });
  }

  ngOnDestroy() {
    this.cartItemsSubscription?.unsubscribe();
  }

}
