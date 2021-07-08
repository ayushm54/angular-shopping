import { Component, OnInit } from '@angular/core';
import { fetchCollection } from '../firebase.utility';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  collections: any;

  constructor() { }

  async ngOnInit() {
    this.collections = await fetchCollection();
  }

}
