import { Subscription } from 'rxjs';
import { AppState } from './../store/index';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store, select } from '@ngrx/store';
import { getCartCount, getCardHidden } from '../store/cart/cart.selector';
import {ToggleCartHidden } from '../store//cart/cart.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount: any;
  cartHidden: any;
  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  cartCountSubscription: Subscription;
  cartHiddenSubscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cartCountSubscription = this.store.pipe(select(getCartCount)).subscribe((cartCount: any) => {
      this.cartCount = cartCount;
    });

    this.cartHiddenSubscription = this.store.pipe(select(getCardHidden)).subscribe((hidden: any)=>{
      this.cartHidden = hidden;
    });
  }

  onDarkModeSwitched(change: MatSlideToggleChange) {
    this.darkModeSwitched.emit(change.checked);
  }

  toggleCartDropdown() {
    this.store.dispatch(new ToggleCartHidden());
  }

  ngOnDestroy(): void {
    this.cartCountSubscription?.unsubscribe();
    this.cartHiddenSubscription?.unsubscribe();
  }
}
