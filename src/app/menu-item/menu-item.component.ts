import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() public section: any;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCollection() {
    this.router.navigate(['collection', this.section.title]);
  }

}
