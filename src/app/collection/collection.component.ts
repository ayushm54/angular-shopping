import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchCollection, convertCollectionsSnapshotToMap } from '../firebase.utility';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collection: any;
  collectionItems: any
  title: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.title = params['title'];
      this.collection = await fetchCollection(this.title);
      this.collectionItems = this.collection[this.title].items;
    });
  }

}
