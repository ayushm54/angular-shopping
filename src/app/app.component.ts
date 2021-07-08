import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
 
  cartCount: any;
  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2) {}


  switchMode(isDarkMode: boolean){
    // changing theme on the whole body
    console.log('isDarkMode', isDarkMode);
    const hostClass = isDarkMode?'theme-dark':'theme-light';
    console.log('hostClass', hostClass)
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
  }

}
