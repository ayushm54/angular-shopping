import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/index';
import { AddItemToCart } from '../store/cart/cart.actions';
@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {

  @Input() collectionItem: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addItemToCart(item: any): void {
    this.store.dispatch(new AddItemToCart(this.collectionItem));
  }
}
