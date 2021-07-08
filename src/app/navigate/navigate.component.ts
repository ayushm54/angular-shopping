import { Component, ChangeDetectionStrategy, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigateComponent {

  @Output()
  readonly darkModeSwitched =   new EventEmitter<boolean>();
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  onDarkModeSwitched(change : MatSlideToggleChange){
    this.darkModeSwitched.emit(change.checked);
  }

}
