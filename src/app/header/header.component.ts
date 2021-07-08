import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() cartCount:any
  @Output()
  readonly darkModeSwitched =   new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onDarkModeSwitched(change : MatSlideToggleChange){
    this.darkModeSwitched.emit(change.checked);
  }
}
