import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {

  @Input() collectionItem: any;

  constructor() { }

  ngOnInit(): void {
  }

  addItemToCart(item: any): void {
    console.log(item);
  }
}
