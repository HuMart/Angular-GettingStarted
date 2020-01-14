import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1 [style.margin.px]='titleMargin'>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Angular Product Managment';
  titleMargin: number = 2;
}
